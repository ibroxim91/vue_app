import axios  from "axios";

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.headers.common['Authorization'] = 'JWT '+ localStorage.getItem('access')