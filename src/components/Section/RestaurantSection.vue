<template>
    <section class="mx-auto mt-12 w-11/12">
          <h2 class="text-3xl ml-3">Top Rated Restaurants</h2>
          <div class="restaurant_list flex flex-wrap mt-3">
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
            <RestaurantCards restaurantName="The Serial Griller" restaurantCategory="Fast food" deliveryTime="10-20 min" deliveryAmount="20 taka"/>
          </div>
        </section>
</template>

<script>
import RestaurantCards from '../Cards/RestaurantCards.vue';
export default {
    components: {
        RestaurantCards
    }
}
</script>