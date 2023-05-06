import { useSelector } from "react-redux";
import { getContacts } from "store/selectors";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter} from "./Filter/Filter"
import {Title, TitleContacts} from "./App.styled"

export const App = () => {
  const contacts = useSelector(getContacts);

    return (
      <>
        <>
          <Title>Phonebook</Title>
          <ContactForm />
        </>
         {contacts.length > 0 && (
        <>
            <TitleContacts>Contacts</TitleContacts>
            <Filter />
            <ContactList />
          </>)}
      </>
    );
}
    
