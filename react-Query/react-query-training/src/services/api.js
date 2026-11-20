import axios from "axios";

const API_URL = import.meta.env.VITE_SUPABASE_URL; //from .env
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const api = axios.create({
  baseURL: `${API_URL}/rest/v1`,
  headers: {
    apikey: SUPABASE_KEY,
    // Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json", //Tells the API we're sending JSON
  },
});

export default api;

//Axios Interceptor

// api.interceptors.request.use((config) => {
//   console.log("API Request:", config.url);
//   return config;
// });

// api.interceptors.response.use(
//   (response) => {
//     console.log("API Response:", response.status);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );