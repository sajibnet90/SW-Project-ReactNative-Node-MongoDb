//filename: ShoppingListProj/Frontend-React-Native/src/services/api.js
import axios from 'axios';
//import { API_URL } from 'react-native-dotenv';
import { API_URL } from '@env';  // Importing from @env

//const API_URL = 'http://localhost:5000/api/tasks'; // Replace with your backend URL
//const API_URL = 'http://192.168.1.131:5000/api/tasks';//change backend server ip
// or  from .env file

export const getTasks = () => axios.get(`${API_URL}api/tasks`);  // Using template literals
export const addTask = (task) => axios.post(`${API_URL}api/tasks`, task);
