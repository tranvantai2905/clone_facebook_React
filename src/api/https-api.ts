import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_OPEN_AI,
  headers: {
    "Content-type": "application/json",
  },
});
