<template>
  <div
    class="h-screen bg-[url('../assets/cook.jpg')] bg-no-repeat bg-contain flex justify-center items-center"
  >
    <div class="mx-auto w-[25rem] h-[32rem] bg-white shadow-xl rounded-md p-7">
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-5">Ready to grow your business?</h3>

        <form @submit.prevent="login" class="flex flex-col">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Business email <span class="text-red-600">*</span></label
          >
          <input
            v-model="formData.email"
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span class="text-red-600 text-xs" v-if="errors?.email">{{
            errors.email[0]
          }}</span>

          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Password <span class="text-red-600">*</span></label
          >
          <input
            v-model="formData.password"
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span class="text-red-600 text-xs" v-if="errors?.password">{{
            errors.password[0]
          }}</span>
          <button
            :disabled="disableSubmitBtn"
            class="bg-fuchsia-600 mt-5 rounded-md p-3 text-white disabled:bg-fuchsia-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useOwnerStore } from "@/stores/owner";

export default {
  setup() {
    const ownerStore = new useOwnerStore();
    return { ownerStore };
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      disableSubmitBtn: false,
      errors: {},
    };
  },
  methods: {
    async login() {
      try {
        this.disableSubmitBtn = true;
        if (this.validateForm()) {
          const res = await this.ownerStore.login(this.formData);

          if (res?.data?.data?.status) {
            this.toast.success(res.data.message);
            this.$router.push({ name: "ownerHome" });
          } else if (res?.response?.data?.message) {
            if (res?.response?.data?.errors) {
              this.errors = res.response.data.errors;
            }

            this.showErrorMessage(res.response.data.message);
          } else {
            this.showErrorMessage();
          }
        }
      } catch (error) {
        this.showErrorMessage();
      } finally {
        this.disableSubmitBtn = false;
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {
        email: [],
        password: [],
      };
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

      if (!this.formData.email) {
        this.errors.email.push("This field is required");
        isValid = false;
      } else if (!regex.test(this.formData.email)) {
        this.errors.email.push("This field must be a valid email");
        isValid = false;
      }

      if (!this.formData.password) {
        this.errors.password.push("This field is required");
        isValid = false;
      } else if (this.formData.password.toString().length < 6) {
        isValid = false;
        this.errors.password.push("Password must be atleast 6 characters");
      }

      return isValid;
    },
    showErrorMessage(message = "Something went wrong") {
      this.toast.error(message);
    },
  },
};
</script>
