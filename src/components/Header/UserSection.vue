<template>
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
</template>
<script>
export default {
    name: 'HeaderUserSection'
} 
</script>