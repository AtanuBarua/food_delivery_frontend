import { defineStore } from "pinia";
import axios from 'axios';
import router from "../router";

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
        const res = await axios.post("/owner/login", formData);
        
        if (res.data.data.status) {
            this.isAuthenticated = true;
            this.owner = res.data.user
        }
        return res;
      } catch (error) {
          return error
      }
    },

    unauthenticateOwner() {
      this.isAuthenticated = false;
      this.owner = {};
      router.push({name: 'ownerLogin'})
    }, 

    async logout() {
        try {
            return await axios.post("/owner/logout");
        } catch (error) {
            return error
        }
    }
  }
});
