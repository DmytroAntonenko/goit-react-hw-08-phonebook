import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Input,
  Flex,
  FormControl,
} from '@chakra-ui/react';

import { logIn } from 'redux/auth/operation';

const initialValues = {
    email: '',
    password: ''
};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
    };

  return (
    <Flex direction='column'
            align='center'
            w={380} h={185} p={3}
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
                        <Field type='email' name='email' required>
                            {({ field, form }) => (
                                    <FormControl w='355px'>
                                    <Input {...field}
                                        autoComplete='off'
                                        backgroundColor='#EDF2F7'
                                        borderColor='#2D3748'
                                        marginBottom='15'
                                        _placeholder={{
                                            opacity: 0.4,
                                            color: '#2D3748'
                                        }}
                                        placeholder='Email'
                                        color='#2D3748'
                                    />
                                    </FormControl>
                                )
                            }
                        </Field>
                        <Field type='password' name='password' required>
                            {({ field, form }) => (
                                <FormControl w='355px'>
                                    <Input {...field}
                                        autoComplete='off'
                                        backgroundColor='#EDF2F7'
                                        borderColor='#2D3748'
                                        _placeholder={{
                                            opacity: 0.4,
                                            color: '#2D3748' }}
                                        placeholder='Password'
                                        color='#2D3748'
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Button p={2} my={5}
                            w={100} 
                            display="block"
                            marginLeft='auto'
                            marginRight='auto'
                            fontWeight='bold'
                            type='submit' name='Log in'>Log in
                        </Button>
                    </Form>
                )}
            </Formik>
        </Flex>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    field: PropTypes.object,
    form: PropTypes.object,
};

export default LoginForm;