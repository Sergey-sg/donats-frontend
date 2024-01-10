import React, { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
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
    <div className="pb-4">
      <Banner />
      <br />
      <Statistic />
      <br />
      <Jars />
    </div>
  );
};

export default Home;
