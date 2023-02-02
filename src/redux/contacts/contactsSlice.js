import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts, editContacts } from './operations';

const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addContactsFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactsFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload);
  state.items.splice(index, 1);
};

const editContactFulfilledReduser = (state, action) => {
  state.contacts[
    state.contacts.findIndex(contact => contact.id === action.payload.id)
  ] = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const extraactions = [addContact, deleteContact, fetchContacts, editContacts];
export const getactions = type =>
  isAnyOf(...extraactions.map(action => action[type]));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactsFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilledReducer)
      .addCase(editContacts.fulfilled, editContactFulfilledReduser)
      .addMatcher(getactions('fulfilled'), anyFulfilledReducer)
      .addMatcher(getactions('pending'), anyPendingReducer)
      .addMatcher(getactions('rejected'), anyRejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;