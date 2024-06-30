<template>
  <aside class="w-1/5 bg-white shadow-md mt-4 rounded border-black flex flex-col ">
    <h2 class="text-xl ml-6 mt-5 font-bold">Filters</h2>
    <SortFilter />
  </aside>
</template>

<script>
import SortFilter from './SortFilter.vue';
export default {
  components: {
    SortFilter
  }
}
</script>