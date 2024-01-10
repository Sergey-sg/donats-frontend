import Banner from "../components/Banner";
import Statistic from "../components/Statistic";
import Jars from "../components/Jars";

const Home = () => {
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
