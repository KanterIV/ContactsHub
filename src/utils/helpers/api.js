import axios from 'axios';

const contactsInstances = axios.create({
  // baseURL: 'https://contacts-reader-02va.onrender.com/api',
  baseURL: 'http://localhost:5000/api',
});

export const setToken = token => {
  contactsInstances.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegistration = async newUser => {
  const { data } = await contactsInstances.post('/users/register', newUser);
  setToken(data.token);
  return data;
};

export const requestLogin = async userData => {
  const { data } = await contactsInstances.post('/users/login', userData);
  setToken(data.token);
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

export const requestUserAvatarUpdate = async formData => {
  const { data } = await contactsInstances.patch('/users/avatars', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
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
