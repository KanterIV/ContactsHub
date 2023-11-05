import axios from 'axios';

const contactsInstances = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const requestRegistration = async newUser => {
  const { data } = await contactsInstances.post('/users/signup', newUser);
  return data;
};

export const requestLogin = async userData => {
  const { data } = await contactsInstances.post('/users/login', userData);
  return data;
};

export const requestLogout = async () => {
  const { data } = await contactsInstances.post('/users/logout');
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await contactsInstances.get('/users/current');
  return data;
};

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
