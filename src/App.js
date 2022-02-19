import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { AppDiv, Text, Title } from "./components/styles/styled";
import { getVisibleContacts } from "./store/contacts/selectors";
import { useEffect } from "react";
import { getContacts } from "./store/contacts/actions";

function App() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  return (
    <AppDiv>
      <Title>Phone book</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={contacts} />
      ) : (
        <Text>Nothing</Text>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AppDiv>
  );
}

export default App;
