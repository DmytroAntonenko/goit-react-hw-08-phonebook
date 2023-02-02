import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filtersSlice';

import { Input, Center } from '@chakra-ui/react';


const Filter = () => {
  const dispatch = useDispatch();

  const onInputChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    dispatch(changeFilter(event.target.value.toLowerCase()));;
};

return <Center mb="15px">
  <Input w='380px' color='#2D3748'
    placeholder='Find contacts by name'
    _placeholder={{ opacity: 0.4, color: '#2D3748' }}
    fontSize={{base:'xs', md: 'sm'}}
    backgroundColor='#EDF2F7'
    borderColor='#2D3748'
    type='text'
    name='value'
    onChange={onInputChange}
  />
</Center>
};

Filter.propTypes = {
    handleChange: PropTypes.func,
    QueryInputId: PropTypes.func,
};
  
export default Filter;