<template>
  <div class="user relative w-1/5">
    <div class="group inline-block">
      <Dropdown label="Atanu" imageSrc="/src/assets/user.svg" />
      <div
        class="absolute z-10 w-full rounded-lg shadow-lg hidden group-hover:block"
      >
        <DropdownItem
          label="Orders and reordering"
          imageSrc="/src/assets/note.svg"
        />
        <DropdownItem label="Help center" imageSrc="/src/assets/help.svg" />
        <DropdownItem
          @click="logout"
          label="Logout"
          imageSrc="/src/assets/logout.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Dropdown from "../Dropdown/Dropdown.vue";
import DropdownItem from "../Dropdown/DropdownItem.vue";
import { useOwnerStore } from "@/stores/owner";

export default {
  name: "HeaderUserSection",
  components: {
    DropdownItem,
    Dropdown,
  },
  setup() {
    const store = new useOwnerStore();
    return { store };
  },
  methods: {
    async logout() {
      try {
        const res = await this.store.logout();

        if (res.status == 200) {
          this.store.unauthenticateOwner();
          this.toast.success("User successfully logged out");
        } else {
          this.toast.error("Something went wrong");
        }
      } catch (error) {
        this.toast.error("Something went wrong");
      }
    },
  },
};
</script>
