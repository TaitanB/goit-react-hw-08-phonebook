// import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// import { fetchContacts, addContact, deleteContact } from '../../api.js';

// export const fetchAllContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const data = await fetchContacts();
//       return data;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data);
//     }
//   }
// );

// export const fetchAddContact = createAsyncThunk(
//   'contacts/addContact',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await addContact(data);
//       // console.log(data);
//       toast.success('Contact added!');
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   },
//   {
//     condition: ({ name }, { getState }) => {
//       // console.log(name);
//       const { contacts } = getState();
//       // console.log(contacts.items);
//       const normalizedName = name.toLowerCase();
//       const result = contacts.items.find(({ name }) => {
//         // console.log(name);
//         return name.toLowerCase() === normalizedName;
//       });

//       if (result) {
//         toast.success(`${name} is already in contacts!`);
//         return false;
//       }
//     },
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteContact(id);
//       toast.success('Contact deleted!');
//       return id;
//     } catch ({ response }) {
//       return rejectWithValue(response.data);
//     }
//   }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// GET @ /contacts
export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', data);
      // console.log(data);
      toast.success('Contact added!');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      // console.log(name);
      const { contacts } = getState();
      // console.log(contacts.items);
      const normalizedName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        // console.log(name);
        return name.toLowerCase() === normalizedName;
      });

      if (result) {
        toast.error(`${name} is already in contacts!`);
        return false;
      }
    },
  }
);

// DELETE @ /contacts/:id
export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      // console.log(id);
      toast.success('Contact deleted!');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
