<template>
    <Layout>
        <template v-slot="">
            <div class="flex justify-end w-4/5 mt-4">
                <RouterLink :to="{ name: 'ownerRestaurantAdd' }" class="bg-fuchsia-500 px-4 py-2 rounded-lg text-white">
                    Add restaurant</RouterLink>
            </div>
            <div class="flex justify-center items-center mt-10">
                <table class="w-4/5 divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Logo
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Address
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-if="restaurants.length > 0" v-for="restaurant in restaurants">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">
                                    {{ restaurant.name }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <img :src="restaurant.logo" alt="logo" width="90" />
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div class="text-sm text-gray-500">
                                    {{ restaurant.address }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                                    :class="statusClass(restaurant.status)">
                                    {{ statusText(restaurant.status) }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <RouterLink :to="{ name: 'ownerRestaurantEdit', params: { id: restaurant.id } }"
                                    class="bg-teal-500 px-4 py-3 rounded-lg text-white">Edit</RouterLink>
                            </td>
                        </tr>
                        <p v-else class="text-red-700">No data found</p>
                    </tbody>
                </table>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from "./Layout.vue";

export default {
    name: "RestaurantList",
    components: {
        Layout,
    },
    data() {
        return {
            restaurants: [],
        };
    },
    mounted() {
        this.getRestaurants();
    },
    methods: {
        async getRestaurants() {
            const res = await this.axios.get("/owner/restaurants");
            this.restaurants = res.data.data.restaurants;
        },
        statusClass(status) {
            return status == 0
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800";
        },
        statusText(status) {
            return status == 0 ? "Pending" : "Approved";
        },
    },
};
</script>