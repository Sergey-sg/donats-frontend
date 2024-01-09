import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from 'react-router-dom'
import ImageList from "../components/ImageList";
import Container from 'react-bootstrap/Container';
import { fetchGetJarById } from "../redux/jar/jarActions"


const JarDetail = () => {
  const { jarId } = useParams()
  const jar = useAppSelector((state) => state.jar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log("start useEffect in JarDetail");

    dispatch(fetchGetJarById(jarId))
  }, [dispatch, jarId]);

  return (
    <Container className='bg-super-light-blue pb-4'>
      <br />
      <p>{jar.description}</p>
      <ImageList images={jar.album}/>
    </Container>
    );
};

export default JarDetail;
