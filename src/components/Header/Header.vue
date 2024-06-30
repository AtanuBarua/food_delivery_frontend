<template>
  <header class="h-16 w-screen mt-5">
    <nav class="flex flex-row justify-around">
      <LogoSection />
      <InputSearchLocation />
      <UserSection />
    </nav>
  </header>
</template>

<script>
import UserSection from './UserSection.vue';
import InputSearchLocation from './InputSearchLocation.vue';
import LogoSection from './LogoSection.vue';

export default {
  components: {
    UserSection, InputSearchLocation, LogoSection
  }
}

</script>