import BackButton from 'components/BackButton';
import { Heading} from '@chakra-ui/react';

  const NotFound = () => {
    return (
        <div>
          <BackButton />
          <Heading fontWeight='bold' textAlign='center' marginTop='60' as='h1'>Oooops, page not found</Heading>
        </div>
      
    );
  }

  export default NotFound;