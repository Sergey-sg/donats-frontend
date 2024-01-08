import Container from 'react-bootstrap/Container';
import Banner from '../components/Banner'
import Statistic from '../components/Statistic'
import Jars from '../components/Jars'


const Home = () => {

  return (
    <Container className='bg-super-light-blue pb-4'>
        <br />
        <Banner />
        <br />
        <Statistic />
        <Jars />
    </Container>
  );
};

export default Home;