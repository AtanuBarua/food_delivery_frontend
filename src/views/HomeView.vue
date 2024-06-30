<script setup>
</script>

<template>
  <div class="layout h-screen flex flex-col">
    <div class="header_section">
      <header class="h-16 w-screen mt-5">
        <nav class="flex flex-row justify-around">
          <div class="logo flex flex-row space-x-2 cursor-pointer">
            <img src="/src/assets/logo.svg" alt="" style="height: 28px;">
            <img class="mt-1" src="/src/assets/foodpanda.svg" alt="" style="height: 28px;">
          </div>
          <div class="location w-1/3">
            <button class="w-full flex justify-center items-center hover:bg-pink-100 rounded-lg">
              <span class="mb-2">
                <img class="mt-2" src="/src/assets/location.svg" alt="">
              </span>
              <span class="text-pink-600 font-medium ml-1">Lalkhan Bazar</span>
            </button>
          </div>
          <div class="user relative w-1/5 ">
            <div class="group inline-block">
              <button class=" flex justify-center items-center ">
                <span class="mb-2">
                  <img class="mt-2" src="/src/assets/user.svg" alt="">
                </span>
                <span>Atanu</span>
                <span class="mb-2">
                  <img class="mt-2" src="/src/assets/dropdown.svg" alt="">
                </span>
              </button>
              <div class="absolute z-10  w-full rounded-lg shadow-lg hidden group-hover:block">
                <a href="#" class="block py-3 px-4 bg-slate-50 hover:bg-pink-100">
                  <div class="flex ">
                    <img src="/src/assets/note.svg" alt="">
                    <span class="ml-2">Orders and reordering</span>
                  </div>
                </a>
                <a href="#" class="block py-3 px-4 bg-slate-50 hover:bg-pink-100">
                  <div class="flex ">
                    <img src="/src/assets/help.svg" alt="">
                    <span class="ml-2">Help center</span>
                  </div>
                </a>
                <a href="#" class="block py-3 px-4 bg-slate-50 hover:bg-pink-100">
                  <div class="flex ">
                    <img src="/src/assets/logout.svg" alt="">
                    <span class="ml-2">Logout</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

    <div class="content_section flex-grow flex  bg-slate-100">
      <aside class="w-1/5 bg-white shadow-md mt-4 rounded border-black flex flex-col ">
        <h2 class="text-xl ml-6 mt-5 font-bold">Filters</h2>
        <section class="sorting_filter_section mt-5 ml-6">
          <h3 class="text-sm font-medium">Sort by</h3>
          <label class="mt-4 cursor-pointer flex" for="relevance_filter"><span class="rounded-full inline-block border h-6 w-6 border-pink-600 bg-pink-500"><input class="ml-1" type="radio" name="sort_by_filter" checked id="relevance_filter"></span><span class="ml-2 text-sm hover:text-pink-600 font-mono">Relevance</span></label>
          <label class="block mt-3 cursor-pointer" for="fastest_delivery_filter"><span class="rounded-full inline-block border h-6 w-6 border-pink-600 bg-pink-500"><input class="ml-1" type="radio" name="sort_by_filter" id="fastest_delivery_filter"></span><span class="ml-2 text-sm hover:text-pink-600 font-mono">Fastest delivery</span></label>
          <label class="block mt-3 cursor-pointer" for="distance_filter"><span class="rounded-full inline-block border h-6 w-6 border-pink-600 bg-pink-500"><input class="ml-1" type="radio" name="sort_by_filter" id="distance_filter"></span><span class="ml-2 text-sm hover:text-pink-600 font-mono">Distance</span></label>
        </section>
      </aside>
      <main class="flex-grow mt-4 flex flex-col">
        <input type="search" class="w-4/5 mx-auto pt-4 pb-4 pr-3 pl-9  bg-slate-200 rounded-full hover:border-black " style="background-image: url('/src/assets/search.svg'); background-repeat: no-repeat; background-position: 8px 15px" placeholder="Search for restaurants, cuisines and dishes">
      </main>
    </div>
  </div>
</template>