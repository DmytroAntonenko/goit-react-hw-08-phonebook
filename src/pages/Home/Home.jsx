
import { Heading} from '@chakra-ui/react';
import { BiChat } from 'react-icons/bi';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.home__container}>
      <BiChat size={240} />
      <Heading fontWeight='bold' as='h1'>Welcome to your personal phonebook!</Heading>
    </div>
  );
};

export default Home;