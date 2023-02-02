import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


  export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async (contact, thunkApi) => {
      try {
        const response = await axios.post('/contacts', contact );
        // console.log(contact)
        return response.data;
      } catch (e) {
        return thunkApi.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactId, thunkApi) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data.id;
      } catch (e) {
        return thunkApi.rejectWithValue(e.message);
      }
    }
  );

  export const editContacts = createAsyncThunk(
    'contacts/editContact',
    async ({ contactId, name, number }, thunkAPI) => {
      try {
        const response = await axios.patch(`/contacts/${contactId}`, {
          name,
          number,
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );