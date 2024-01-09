import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from 'react-router-dom'
import ImageList from "../components/ImageList";
import { Container, Row, Button, Nav } from 'react-bootstrap';
import { fetchGetJarById } from "../redux/jar/jarActions"
import StatusJar from '../components/StatusJar';


const JarDetail = () => {
  const { jarId } = useParams()
  const jar = useAppSelector((state) => state.jar)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log("start useEffect in JarDetail");

    dispatch(fetchGetJarById(jarId))
  }, [dispatch, jarId]);

  return (
    <Container className='bg-super-light-blue pb-4 pt-4'>
      <Row>
        <div className='w-75'>
          <div className="text-start fs-5 ps-3">{jar.volunteer}</div>
          <br />
          <p className="text">{jar.description}</p>
          <ImageList images={jar.album}/>
        </div>
        <div className='w-25 pe-5 pt-5'>
          <StatusJar currentSum={jar.current_sum} goal={jar.goal} />
          <Button className="bg-orange w-100 rounded-pill mt-2">
            <Nav.Link href="#donate">donate to a good cause</Nav.Link>
          </Button>
        </div>
      </Row>
    </Container>
    );
};

export default JarDetail;
