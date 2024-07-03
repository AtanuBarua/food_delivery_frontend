<template>
    <div class="container mt-3 max-w-60 mx-1">
        <div class="card bg-white p-4 rounded-lg shadow-xl">
            <img class="rounded-xl w-full h-36 object-cover" src="../../assets/food.webp" alt="">
            <div class="card__details mt-2">
                <h4 class="font-semibold">{{ restaurantName }}</h4>
                <div class="flex text-xs mt-2">
                    <span>$$$</span>
                    <span class="mx-2">|</span>
                    <span>{{ restaurantCategory }}</span>
                </div>
                <div class="flex text-xs mt-2">
                    <img src="../../assets/clock.svg" alt="">
                    <span class="ml-1">{{ deliveryTime }}</span>
                    <span class="mx-1">|</span>
                    <img src="../../assets/rider.svg" alt="">
                    <span class="ml-1">{{ deliveryAmount }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RestaurantCards',
    props: {
        restaurantName: {
            type: String,
            required: true
        },
        deliveryTime: {
            type: String,
            required: true
        },
        deliveryAmount: {
            type: String,
            required: true
        },
        restaurantCategory: {
            type: String,
            required: true
        }
    }
}
</script>