<template>
    <div
      class="h-screen bg-[url('../assets/cook.jpg')] bg-no-repeat bg-contain flex justify-center items-center"
    >
      <div class="mx-auto w-[25rem] h-[32rem] bg-white shadow-xl rounded-md p-7">
        <div class="flex flex-col">
          <h3 class="text-xl font-bold mb-5">Ready to grow your business?</h3>
  
          <Form @submit="login" class="flex flex-col">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Business email <span class="text-red-600">*</span></label
            >
            <Field
              name="email"
              type="text"
              id="email"
              :rules="validateEmail"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <ErrorMessage class="text-red-600 text-xs" name="email" />
    
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Password <span class="text-red-600">*</span></label
            >
            <Field
              name="password"
              type="password"
              id="password"
              :rules="validatePassword"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <ErrorMessage class="text-red-600 text-xs" name="password" />
            <button
              :disabled="disableSubmitBtn"
              class="bg-fuchsia-600 mt-5 rounded-md p-3 text-white disabled:bg-fuchsia-400"
            >
              Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import { useToast } from "vue-toastification";
  
  export default {
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        password: "",
        disableSubmitBtn: false,
        toast: null,
      };
    },
    async created() {
      this.toast = useToast();
    },
    methods: {
      validateName(value) {
        if (!value) {
          return "This field is required";
        }
        return true;
      },
      validateEmail(value) {
        if (!value) {
          return "This field is required";
        }
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return "This field must be a valid email";
        }
        return true;
      },
      validatePassword(value) {
        if (!value) {
          return "This field is required";
        }
        return true;
      },
  
      async login(formData) {
        try {
          this.disableSubmitBtn = true;
          await this.$axios.get('/sanctum/csrf-cookie');
          const res = await this.$axios.post("/api/owner/login", formData);
          if (res.data.status_code == 200) {
            this.toast.success(res.data.message);
            this.$router.push({name: 'ownerHome'})
          } else {
            this.toast.error(res.data.message);
          }
          this.disableSubmitBtn = false;
        } catch (error) {
          console.log(err);
          this.toast.error(err.response.data.message);
          this.disableSubmitBtn = false;
        }
      },
    },
  };
  </script>
  