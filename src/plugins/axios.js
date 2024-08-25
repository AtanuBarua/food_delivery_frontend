import axios from "axios";
import { useOwnerStore } from "@/stores/owner";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 419) {
        const store = useOwnerStore();
        store.unauthenticateOwner();
      }
    }
    return Promise.reject(error)
  },
);

export default axios;