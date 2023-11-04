import axios from 'axios';

const contactsInstances = axios.create({
  baseURL: 'https://653a1c38e3b530c8d9e92d32.mockapi.io/',
});

export const fetchAllContacts = async () => {
  const { data } = await contactsInstances.get('/contacts');
  return data;
};

export const addNewContact = async newContact => {
  const { data } = await contactsInstances.post('/contacts', newContact);
  return data;
};

export const deleteNewContact = async contactId => {
  const { data } = await contactsInstances.delete(`/contacts/${contactId}`);
  return data;
};
