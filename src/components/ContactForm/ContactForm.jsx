//const { nanoid } = require("@reduxjs/toolkit");
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'store/contactsSlice';
import { getContacts } from 'store/selectors';

import { Form, FormGroup, FormWrap, FormLabel, FormInput, Button } from "./ContactForm.styled"

 export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
   
    const handleSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
     const userName = e.target.elements.name.value;
     const getExistingName = (contacts, userName) => {
        return contacts.find(contact => contact.name === userName)
     };
     const existingName = getExistingName(contacts, userName);
     const contact = {
            id: nanoid(),
            name: e.target.elements.name.value,
            number: e.target.elements.number.value,
    }
      existingName ?  
      alert(`${userName} is already in contacts`) : dispatch(addContacts(contact));
     
     
    
    
     //dispatch(addContacts(contact));
     form.reset();
   };
    
  return (     
        <Form onSubmit={handleSubmit}>
        
          <FormGroup>
            <FormWrap>
              <FormLabel>Name</FormLabel>

                  <FormInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    // onChange={handleChange}
                    // value={name}
                    />
                
            </FormWrap>
            
            <FormWrap>
              <FormLabel>Number</FormLabel>
                <FormInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    // onChange={handleChange}
                    // value={number}
                 />
              
            </FormWrap>
          </FormGroup>
          <Button type="submit">Add contact</Button>
        </Form>
 
        )
    }

  //    const handleSubmit = (e) => {
  //    e.preventDefault();
  //    const form = e.target;
  //    const userName = e.target.elements.name.value;
  //    const getExistingName = (contacts, userName) => {
  //       return contacts.find(contact => contact.name === userName)
  //    };
  //    const existingName = getExistingName(contacts, userName);
   
  //     if (existingName) {
  //     alert(`${userName} is already in contacts`);
  //     return;  
  //     }
    
  //     const contact = {
  //           id: nanoid(),
  //           name: e.target.elements.name.value,
  //           number: e.target.elements.number.value,
  //   }
  //    dispatch(addContacts(contact));
  //    form.reset();
  //  };