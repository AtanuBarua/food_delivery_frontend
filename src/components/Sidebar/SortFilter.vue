<template>
    <section class="sorting_filter_section mt-5 ml-6">
        <h3 class="text-sm font-medium">Sort by</h3>
        <label class="mt-4 cursor-pointer flex" for="relevance_filter"><span
                class="rounded-full inline-block border h-6 w-6 border-pink-600 bg-pink-500"><input class="ml-1"
                    type="radio" name="sort_by_filter" checked id="relevance_filter"></span><span
                class="ml-2 text-sm hover:text-pink-600 font-mono">Relevance</span></label>
        <label class="block mt-3 cursor-pointer" for="fastest_delivery_filter"><span
                class="rounded-full inline-block border h-6 w-6 border-pink-600 bg-pink-500"><input class="ml-1"
                    type="radio" name="sort_by_filter" id="fastest_delivery_filter"></span><span
                class="ml-2 text-sm hover:text-pink-600 font-mono">Fastest delivery</span></label>
        <label class="block mt-3 cursor-pointer" for="distance_filter"><span
                class="rounded-full inline-block border h-6 w-6 border-pink-600 bg-pink-500"><input class="ml-1"
                    type="radio" name="sort_by_filter" id="distance_filter"></span><span
                class="ml-2 text-sm hover:text-pink-600 font-mono">Distance</span></label>
    </section>
</template>