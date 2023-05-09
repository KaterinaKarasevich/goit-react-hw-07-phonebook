import { getContactsAPI, addContactsAPI, deleteContactAPI } from "./operations";


const { createSlice} = require("@reduxjs/toolkit");

const handlePending = state => {
    state.isLoading = true;
     }
      
const handleRejected = (state, action) => {
       state.isLoading = false;
        state.error = action.payload;
      }

const initialStateContacts = {
  contacts: [],
  isLoading: false,
  error: null,
};
 
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialStateContacts,
 
  extraReducers: builder => {
    builder
      .addCase(getContactsAPI.pending, handlePending)
      .addCase(getContactsAPI.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(getContactsAPI.rejected, handleRejected)

      .addCase(addContactsAPI.pending, handlePending)
      .addCase(addContactsAPI.fulfilled, (state, action) => {
        // state.contacts = [...state.contacts, action.payload]   
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContactsAPI.rejected, handleRejected)
    
      .addCase(deleteContactAPI.pending, handlePending)
      .addCase(deleteContactAPI.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload) 
        state.isLoading = false;
      })
      .addCase(deleteContactAPI.rejected, handleRejected)
  },
});


export const contactsReducer = contactsSlice.reducer;

