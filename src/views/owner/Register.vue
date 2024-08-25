<template>
  <div
    class="h-screen bg-[url('../assets/cook.jpg')] bg-no-repeat bg-contain flex justify-center items-center"
  >
    <div class="mx-auto w-[25rem] h-[32rem] bg-white shadow-xl rounded-md p-7">
      <div class="flex flex-col">
        <h3 class="text-xl font-bold mb-5">Ready to grow your business?</h3>

        <form @submit.prevent="register" class="flex flex-col">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Business owner full name <span class="text-red-600">*</span></label
          >
          <input
            v-model="formData.name"
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span v-if="errors.name" class="text-red-600 text-xs">{{
            errors.name[0]
          }}</span>
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
          <span v-if="errors.email" class="text-red-600 text-xs">{{
            errors.email[0]
          }}</span>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Phone number <span class="text-red-600">*</span></label
          >
          <input
            v-model="formData.phone"
            type="text"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span v-if="errors.phone" class="text-red-600 text-xs">{{
            errors.phone[0]
          }}</span>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Password <span class="text-red-600">*</span></label
          >
          <input
            v-model="formData.password"
            name="password"
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <span v-if="errors.password" class="text-red-600 text-xs">{{
            errors.password[0]
          }}</span>
          <button
            :disabled="disableSubmitBtn"
            class="bg-fuchsia-600 mt-5 rounded-md p-3 text-white disabled:bg-fuchsia-400"
          >
            Get started
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        password: "",
      },

      disableSubmitBtn: false,
      errors: {},
    };
  },

  methods: {
    async register() {
      try {
        this.disableSubmitBtn = true;
        if (this.validateForm()) {
          await this.axios.get("/sanctum/csrf-cookie");
          const res = await this.axios.post("/owner/register", this.formData);

          if (res.data.data.status) {
            this.toast.success(res.data.message);
            this.$router.push({ name: "ownerLogin" });
          } else {
            this.showErrorMessage();
          }
        }
      } catch (error) {
        if (error?.response?.data?.message) {
          if (error?.response?.data?.errors) {
            this.errors = error.response.data.errors;
          }
          this.showErrorMessage(error.response.data.message);
        } else {
          this.showErrorMessage();
        }
      } finally {
        this.disableSubmitBtn = false;
      }
    },
    showErrorMessage(message = "Something went wrong") {
      this.toast.error(message);
    },
    validateForm() {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const phoneRegex = /^[0-9]/i;

      this.errors = {
        name: [],
        email: [],
        phone: [],
        password: [],
      };
      let isValid = true;

      if (!this.formData.name) {
        isValid = false;
        this.errors.name.push("This field is required");
      }

      if (!this.formData.email) {
        isValid = false;
        this.errors.email.push("This field is required");
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email.push("This field must be a valid email");
      }

      if (!this.formData.phone) {
        isValid = false;
        this.errors.phone.push("This field is required");
      } else if (!phoneRegex.test(this.formData.phone)) {
        isValid = false;
        this.errors.phone.push("This field must be a numeric");
      } else if (this.formData.phone.length != 10) {
        isValid = false;
        this.errors.phone.push("Phone number must be 10 digits");
      }

      if (!this.formData.password) {
        isValid = false;
        this.errors.password.push("This field is required");
      } else if (this.formData.password.toString().length < 6) {
        isValid = false;
        this.errors.password.push("Password must be atleast 6 characters");
      }

      return isValid;
    },
  },
};
</script>
