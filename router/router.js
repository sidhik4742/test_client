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
      const config = {
        headers: {'content-type': 'multipart/form-data'},
      };
      axios.post('/users/signup', formData, config).then(function (response) {
        console.log(response.data);
        resolve(response.data);
      });
    });
  } catch (error) {}
};

export const forgetPasswordRoute = (data) => {
  try {
    return new Promise((resolve, reject) => {
      axios.post('/users/forget_password', data).then(function (response) {
        console.log(response.data);
        resolve(response.data);
      });
    });
  } catch (error) {}
};

export const newPasswordRoute = (data) => {
  try {
    return new Promise((resolve, reject) => {
      axios.post('/users/change_password', data).then(function (response) {
        // console.log(response.data);
        resolve(response.data);
      });
    });
  } catch (error) {}
};
