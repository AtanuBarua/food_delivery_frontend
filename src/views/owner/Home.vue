<template>
    <Layout>
        <template v-slot="">
            <h1 class="text-2xl font-bold">Welcome to the Dashboard</h1>
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