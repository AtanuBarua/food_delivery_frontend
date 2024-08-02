<template>
    <Layout>
        <template v-slot="">
            <h1 class="text-2xl font-bold">Restaurants</h1>
            <RouterLink :to="{name: 'ownerRestaurantAdd'}">Add restaurant</RouterLink>
        </template>
    </Layout>
</template>

<script>

import Layout from './Layout.vue';

export default {
    name: 'Home',
    components: {
        Layout
    }
}
</script>