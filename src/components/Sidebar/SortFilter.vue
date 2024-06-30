<template>
    <section class="sorting_filter_section mt-5 ml-6">
        <h3 class="text-sm font-medium">Sort by</h3>
        <RadioBtn label="Relevance" inputId="relevance_filter" inputName="sort_by_filter" checked="true" marginTopClass="mt-4"/>
        <RadioBtn label="Fastest delivery" inputId="fastest_delivery_filter" inputName="sort_by_filter" marginTopClass="mt-3"/>
        <RadioBtn label="Distance" inputId="distance_filter" inputName="sort_by_filter" marginTopClass="mt-3"/>
    </section>
</template>

<script>
import RadioBtn from '../Buttons/RadioBtn.vue';
export default {
    components: {
        RadioBtn
    }
}
</script>