import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Input,
  FormErrorMessage,
  Box,
  Flex,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react';

import { register } from 'redux/auth/operation';

const initialValues = {
    name: '',
    email: '',
    password: ''
};

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const RegistrForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    };

  return (
    <Flex direction='column'
        align='center'
        w={380} h={300} p={3}
        border={2}
        borderColor='#2D3748'
        backgroundColor='#9fa2a6'
        borderStyle='solid'
        borderRadius={10}
    >
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {(props) => (
                <Form>
                    <Field type='text' name='name' required>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name}>
                                <Input {...field}
                                    autoComplete='off'
                                    color='#2D3748'
                                    backgroundColor='#EDF2F7'
                                    borderColor='#2D3748'
                                    placeholder='Name'
                                    _placeholder={{ opacity: 0.4, color: '#2D3748' }}
                                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                />
                                <Box h='35px' w={355}>
                                    {form.values.name !== '' ? (
                                    <FormHelperText color='#FFFFF0' fontSize={7}>
                                        Name may contain only letters, apostrophe, dash and spaces.
                                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan
                                    </FormHelperText>) : null}
                                    <FormErrorMessage fontSize={7} color='red'>
                                        Name is required
                                    </FormErrorMessage>
                                </Box>
                            </FormControl>
                        )}
                    </Field>
                    <Field type='email' name='email' required>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name}>
                                <Input {...field} 
                                    autoComplete='off'
                                    color='#2D3748'
                                    backgroundColor='#EDF2F7'
                                    borderColor='#2D3748'
                                    placeholder='Email'
                                    _placeholder={{ opacity: 0.4, color: '#2D3748' }}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                />
                                <Box h='35px' w={355}>
                                    {form.values.email !== '' ? (
                                    <FormHelperText fontSize={7} color='#FFFFF0'>
                                        Email must be a valid email address
                                    </FormHelperText>) : null}
                                    <FormErrorMessage fontSize={7} color='red'>Email is required</FormErrorMessage>
                                </Box>
                            </FormControl>
                        )}
                    </Field>
                    <Field type='password' name='password' required>
                        {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name}>
                                <Input {...field}
                                    borderColor='#2D3748'
                                    backgroundColor='#EDF2F7'
                                    autoComplete='off'
                                    placeholder='Password' color='#2D3748'
                                    _placeholder={{ opacity: 0.4, color: '#2D3748' }}
                                />
                                    <Box h={25} w={355}>
                                        <FormErrorMessage fontSize={7} color='red'>Password is required</FormErrorMessage>
                                    </Box>
                                </FormControl>
                            )
                        }
                    </Field>
                    <Button 
                    w={100}
                    fontWeight='bold'
                    type='submit'
                    name='Register'
                    display="block"
                    marginLeft='auto'
                    marginRight='auto'>
                        Register
                    </Button>
                </Form>
            )}
        </Formik>
    </Flex>
);
};

RegistrForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default RegistrForm;