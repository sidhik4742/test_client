import axios from 'axios';

import {serverUrl} from '../constants/constants';

axios.defaults.baseURL = serverUrl;

export const loginRoute = (credentials) => {
  try {
    return new Promise((resolve, reject) => {
      axios.post('/users/login', credentials).then((response) => {
        resolve(response.data);
      });
    });
  } catch (error) {}
};

export const signupRoute = (formData) => {
  try {
    return new Promise((resolve, reject) => {
      axios('users/signup', {
        method: 'post',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      }).then(function (response) {
        console.log(response.data);
        resolve(response.data);
      });
    });
  } catch (error) {}
};
