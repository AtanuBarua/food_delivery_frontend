<template>
  <div class="layout h-screen flex flex-col">
    <div class="header_section">
      <Header/>
    </div>

    <div class="content_section flex-grow flex  bg-slate-100">
      <Sidebar/>
      <main class="flex-grow mt-4 flex flex-col">
        <input type="search" class="w-4/5 mx-auto pt-4 pb-4 pr-3 pl-9  bg-slate-200 rounded-full hover:border-black " style="background-image: url('/src/assets/search.svg'); background-repeat: no-repeat; background-position: 8px 15px" placeholder="Search for restaurants, cuisines and dishes">
      </main>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';

export default {
  components: {
    Header, Sidebar
  }
}
</script>