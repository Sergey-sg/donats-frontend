import React, { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import Banner from "../components/jarComponents/Banner";
import Statistic from "../components/Statistic";
import Jars from "../components/jarComponents/Jars";
import { fetchGetAllTags } from "../redux/jar/jarActions";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("start useEffect tags list in Home");
    dispatch(fetchGetAllTags());
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
