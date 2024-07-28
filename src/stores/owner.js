import { defineStore } from "pinia";
import axios from 'axios';

export const useOwnerStore = defineStore("owner", {
  state: () => ({
    isAuthenticated: false,
    owner: {},
  }),
  persist: true,
  actions: {
    async login(formData) {
      try {
        await axios.get("/sanctum/csrf-cookie");
        const res = await axios.post("/api/owner/login", formData);
        if (res.data.status_code == 200) {
            this.isAuthenticated = true;
            this.owner = res.data.user
        }
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  }
});
