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

    unauthenticateOwner() {
      this.isAuthenticated = false;
      this.owner = {};
    }, 

    async logout() {
        try {
            this.unauthenticateOwner();
            return await axios.post("/api/owner/logout");
        } catch (error) {
            console.log(error);
        }
    }
  }
});
