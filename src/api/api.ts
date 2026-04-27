import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-p4-klvc.onrender.com"
});

export default api;