
import { useDispatch, useSelector } from "react-redux";

import { deleteContactAPI } from "store/operations";
import { getContacts, getFilter } from "store/selectors";

import { ContactItems, ContactItem, ContactButton } from "./ContactList.styled"


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const fixedFilter = filterValue.toLowerCase();
  const filteredContacts = contacts
    ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(fixedFilter))
    : null;
  const dispatch = useDispatch();

  return (
     
      <ContactItems>
        { filteredContacts && filteredContacts.map(contact => {
          return (
            <ContactItem key={contact.id}>
              {contact.name + ": " + contact.phone}
              {<ContactButton
                type="button"
                onClick={() => dispatch(deleteContactAPI(contact.id))}>
                Delete
              </ContactButton>}
            </ContactItem>
          )
        })}
           
      </ContactItems>
    )
  };
   
