// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust if different
  withCredentials: true, // if your backend sets cookies
});

export default instance;
