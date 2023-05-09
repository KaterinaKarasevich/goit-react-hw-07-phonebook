import { useDispatch, useSelector } from "react-redux";
import { getError, getisLoading } from "store/selectors";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter} from "./Filter/Filter"
import {Title, TitleContacts} from "./App.styled"
import { useEffect } from "react";
import { getContactsAPI } from "store/operations";
import Loader from "./Loader";

export const App = () => {
  
  const isLoading = useSelector(getisLoading)
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAPI());
  }, [dispatch]);

    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm />
       
        {isLoading && !error && <Loader />}
        {error && !isLoading && (<p>Something went wrong</p>)}
     
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
          
        <ContactList />
         
      </>
    );
}
    
