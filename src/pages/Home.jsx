import React, { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import Container from "react-bootstrap/Container";
import Banner from "../components/Banner";
import Statistic from "../components/Statistic";
import Jars from "../components/Jars";
import { fetchGetJars, fetchGetJarsForBanner } from "../redux/jar/jarActions";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("start useEffect in Home");

    dispatch(fetchGetJars());
    dispatch(fetchGetJarsForBanner())
  }, [dispatch]);

  return (
    <Container className="bg-super-light-blue pb-4">
      <br />
      <Banner />
      <br />
      <Statistic />
      <Jars />
    </Container>
  );
};

export default Home;
