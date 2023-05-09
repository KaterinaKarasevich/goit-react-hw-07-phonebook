import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://645687e42e41ccf1691f9aba.mockapi.io/contacts/";

export const getContactsAPI = createAsyncThunk(
    "contacts/getContactsAPI",
    async (_, thunkiAPI) => {
     try {
    const {data} = await axios.get('/contacts')
         //console.log(data);
         return data;
     } catch (error) {
         return thunkiAPI.rejectWithValue(error.message);
     }
    }
)

export const addContactsAPI = createAsyncThunk(
    "contacts/addContactsAPI",
    async (newContact, thunkiAPI) => {
        try {
            const { data } = await axios.post('/contacts', newContact);
            return data;       
        } catch (error) {
             return thunkiAPI.rejectWithValue(error.message);
        }
    }
)
export const deleteContactAPI = createAsyncThunk(
    "contacts/deleteContactAPI",
    async (id, thunkiAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
             return data.id; 
        } catch (error) {
             return thunkiAPI.rejectWithValue(error.message);
        }
    } 
)