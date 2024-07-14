<template>
    <div class="h-screen flex flex-col">
        <header class="header h-16 w-screen mt-5 border-b-4">
            <nav class="flex flex-row justify-between mx-5">
                <LogoSection />
                <UserSection />
            </nav>
        </header>

        <div class="flex h-4/5 flex-grow">
            <div class="sidebar  w-1/5 border-r-4">
                <ul>
                    <li class="bg-fuchsia-500 p-3 cursor-pointer hover:bg-pink-400 text-white">
                        <font-awesome-icon :icon="['fas', 'house']" />
                        <span class="ml-2">Dashboard</span>
                    </li>
                    <li class="p-3 cursor-pointer hover:bg-pink-400 hover:text-white">
                        <font-awesome-icon :icon="['fas', 'utensils']" />
                        <span class="ml-2">Restaurants</span>
                    </li>
                </ul>
            </div>
            <div class="content w-4/5">

            </div>
        </div>
    </div>
</template>

<script>
import LogoSection from '../../components/Header/LogoSection.vue';
import UserSection from '../../components/Header/UserSection.vue';

export default {
    name: 'Home',
    components: {
        LogoSection, UserSection
    }
}
</script>