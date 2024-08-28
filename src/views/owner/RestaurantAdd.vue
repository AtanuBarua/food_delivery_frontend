<template>
  <Layout>
    <template v-slot="">
      <h1 class="text-2xl font-bold text-center mt-4">Add Restaurant</h1>

      <div class="px-10 mx-auto mt-10">
        <form
          @submit.prevent="formSubmit"
          class="flex flex-col w-full"
          enctype="multipart/form-data"
        >
          <div class="flex justify-around">
            <div class="w-2/5">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Restaurant name <span class="text-red-600">*</span></label
              >
              <input
                v-model="form.name"
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span v-if="errors.name" class="text-red-600 text-xs">{{
                errors.name[0]
              }}</span>
              <label
                for="business_licence"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Business licence <span class="text-red-600">*</span></label
              >
              <input
                type="file"
                id="business_licence"
                @change="
                  onFileChange(
                    $event,
                    'businessLicencePreview',
                    'business_licence'
                  )
                "
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span
                v-if="errors.business_licence"
                class="text-red-600 text-xs"
                >{{ errors.business_licence[0] }}</span
              >
              <img
                v-if="businessLicencePreview"
                :src="businessLicencePreview"
                alt="Logo"
                width="100"
              />
              <label
                for="vat_certificate"
                class="block mb-2 text-sm font-medium text-gray-900"
                >VAT certificate <span class="text-red-600">*</span></label
              >
              <input
                type="file"
                id="vat_certificate"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                accept="image/*"
                @change="
                  onFileChange(
                    $event,
                    'vatCertificatePreview',
                    'vat_certificate'
                  )
                "
              />
              <span
                v-if="errors.vat_certificate"
                class="text-red-600 text-xs"
                >{{ errors.vat_certificate[0] }}</span
              >
              <img
                v-if="vatCertificatePreview"
                :src="vatCertificatePreview"
                alt="Logo"
                width="100"
              />
              <label
                for="tax_identification_number"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Tax identification number
                <span class="text-red-600">*</span></label
              >
              <input
                v-model="form.tax_identification_number"
                type="number"
                id="tax_identification_number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span
                v-if="errors.tax_identification_number"
                class="text-red-600 text-xs"
                >{{ errors.tax_identification_number[0] }}</span
              >
              <label
                for="restaurant_menu"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Updated restaurant menu
                <span class="text-red-600">*</span></label
              >
              <input
                type="file"
                id="restaurant_menu"
                accept="image/*"
                @change="
                  onFileChange(
                    $event,
                    'restaurantMenuPreview',
                    'restaurant_menu'
                  )
                "
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span
                v-if="errors.restaurant_menu"
                class="text-red-600 text-xs"
                >{{ errors.restaurant_menu[0] }}</span
              >
              <img
                v-if="restaurantMenuPreview"
                :src="restaurantMenuPreview"
                alt="Logo"
                width="100"
              />
            </div>
            <div class="w-2/5">
              <label
                for="logo"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Logo</label
              >
              <input
                type="file"
                id="logo"
                @change="onFileChange($event, 'logoPreview', 'logo')"
                accept="image/*"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span v-if="errors.logo" class="text-red-600 text-xs">{{
                errors.logo[0]
              }}</span>
              <img
                v-if="logoPreview"
                :src="logoPreview"
                alt="Logo"
                width="100"
              />
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Full address <span class="text-red-600">*</span></label
              >
              <textarea
                v-model="form.address"
                id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></textarea>
              <span v-if="errors.address" class="text-red-600 text-xs">{{
                errors.address[0]
              }}</span>
              <label
                for="bank_statement"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Bank statement <span class="text-red-600">*</span></label
              >
              <input
                name="bank_statement"
                type="file"
                id="bank_statement"
                @change="
                  onFileChange($event, 'bankStatementPreview', 'bank_statement')
                "
                accept="image/*"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span v-if="errors.bank_statement" class="text-red-600 text-xs">{{
                errors.bank_statement[0]
              }}</span>
              <img
                v-if="bankStatementPreview"
                :src="bankStatementPreview"
                alt="Logo"
                width="100"
              />

              <label
                for="utility_bill"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Utility bill <span class="text-red-600">*</span></label
              >
              <input
                type="file"
                id="utility_bill"
                @change="
                  onFileChange($event, 'utilityBillPreview', 'utility_bill')
                "
                accept="image/*"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <span v-if="errors.utility_bill" class="text-red-600 text-xs">{{
                errors.utility_bill[0]
              }}</span>
              <img
                v-if="utilityBillPreview"
                :src="utilityBillPreview"
                alt="Logo"
                width="100"
              />
            </div>
          </div>
          <button
            :disabled="disableSubmitBtn"
            class="bg-fuchsia-600 mt-5 rounded-md p-3 text-white disabled:bg-fuchsia-400 w-1/2 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import { useOwnerStore } from "@/stores/owner";

export default {
  name: "Home",
  components: {
    Layout
  },
  data() {
    return {
      disableSubmitBtn: false,
      logoPreview: null,
      businessLicencePreview: null,
      vatCertificatePreview: null,
      restaurantMenuPreview: null,
      bankStatementPreview: null,
      utilityBillPreview: null,

      form: {
        name: null,
        logo: null,
        address: null,
        business_licence: null,
        vat_certificate: null,
        tax_identification_number: null,
        bank_statement: null,
        utility_bill: null,
        restaurant_menu: null,
      },

      errors: {},

      validFileTypes: ["image/jpeg", "image/jpg", "image/png"],
      maxFileSize: 2 * 1024 * 1024, //2mb
    };
  },
  methods: {
    onFileChange(event, preview, model) {
      const file = (this.form[model] = event.target.files[0]);

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this[preview] = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {
        name: [],
        logo: [],
        address: [],
        business_licence: [],
        vat_certificate: [],
        tax_identification_number: [],
        bank_statement: [],
        utility_bill: [],
        restaurant_menu: [],
      };

      // validate name
      if (!this.form.name) {
        this.errors.name.push("This field is required");
        isValid = false;
      }

      // validate logo
      if (!this.form.logo) {
        this.errors.logo.push("This field is required");
        isValid = false;
      } else if (!this.validFileTypes.includes(this.form.logo.type)) {
        isValid = false;
        this.errors.logo.push("File type must be jpg/jpeg/png");
      } else if (this.form.logo.size > this.maxFileSize) {
        isValid = false;
        this.errors.logo.push("File size must be within 2mb");
      }

      // validate business licence
      if (!this.form.business_licence) {
        this.errors.business_licence.push("This field is required");
        isValid = false;
      } else if (
        !this.validFileTypes.includes(this.form.business_licence.type)
      ) {
        isValid = false;
        this.errors.business_licence.push("File type must be jpg/jpeg/png");
      }

      // validate vat certificate
      if (!this.form.vat_certificate) {
        this.errors.vat_certificate.push("This field is required");
        isValid = false;
      } else if (
        !this.validFileTypes.includes(this.form.vat_certificate.type)
      ) {
        isValid = false;
        this.errors.vat_certificate.push("File type must be jpg/jpeg/png");
      } else if (this.form.vat_certificate.size > this.maxFileSize) {
        this.errors.vat_certificate.push("File size must be within 2mb");
      }

      // validate tax identification number
      if (!this.form.tax_identification_number) {
        this.errors.tax_identification_number.push("This field is required");
        isValid = false;
      } else if (this.form.tax_identification_number.toString().length != 10) {
        isValid = false;
        this.errors.tax_identification_number.push("Must be 10 digits");
      } else if (this.form.tax_identification_number.size > this.maxFileSize) {
        isValid = false;
        this.errors.tax_identification_number.push(
          "File size must be within 2mb"
        );
      }

      // validate restaurant menu
      if (!this.form.restaurant_menu) {
        this.errors.restaurant_menu.push("This field is required");
        isValid = false;
      } else if (
        !this.validFileTypes.includes(this.form.restaurant_menu.type)
      ) {
        isValid = false;
        this.errors.restaurant_menu.push("File type must be jpg/jpeg/png");
      } else if (this.form.restaurant_menu.size > this.maxFileSize) {
        this.errors.restaurant_menu.push("File size must be within 2mb");
      }

      // validate address
      if (!this.form.address) {
        this.errors.address.push("This field is required");
        isValid = false;
      }

      // validate bank statement
      if (!this.form.bank_statement) {
        this.errors.bank_statement.push("This field is required");
        isValid = false;
      } else if (!this.validFileTypes.includes(this.form.bank_statement.type)) {
        isValid = false;
        this.errors.bank_statement.push("File type must be jpg/jpeg/png");
      } else if (this.form.bank_statement.size > this.maxFileSize) {
        isValid = false;
        this.errors.bank_statement.push("File size must be within 2mb");
      }

      // validate utility bill
      if (!this.form.utility_bill) {
        this.errors.utility_bill.push("This field is required");
        isValid = false;
      } else if (!this.validFileTypes.includes(this.form.utility_bill.type)) {
        isValid = false;
        this.errors.utility_bill.push("File type must be jpg/jpeg/png");
      } else if (this.form.utility_bill.size > this.maxFileSize) {
        isValid = false;
        this.errors.utility_bill.push("File size must be within 2mb");
      }

      return isValid;
    },

    async formSubmit() {
      if (this.validateForm()) {
        formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("logo", this.form.logo);
        formData.append("address", this.form.address);
        formData.append("vat_certificate", this.form.vat_certificate);
        formData.append("business_licence", this.form.business_licence);
        formData.append(
          "tax_identification_number",
          this.form.tax_identification_number
        );
        formData.append("bank_statement", this.form.bank_statement);
        formData.append("utility_bill", this.form.utility_bill);
        formData.append("restaurant_menu", this.form.restaurant_menu);

        try {
          this.disableSubmitBtn = true;
          const res = await this.axios.post("/owner/restaurant/add", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
            },
          });

          if (res.status == 200) {
            this.toast.success(res.data.message);
            this.$router.push({name: 'ownerRestaurantList'})
          } else {
            this.toast.error("Something went wrong");
          }
        } catch (error) {
          if (error.response?.data?.message) {
            if (error.response?.data?.errors) {
              this.errors = error.response.data.errors;
            }
            this.showErrorMessage(error.response.data.message);
          } else {
            this.showErrorMessage();
          }
        } finally {
          this.disableSubmitBtn = false;
        }
      }
    },
    showErrorMessage(message = "Something went wrong") {
      this.toast.error(message);
    },
  },
};
</script>
