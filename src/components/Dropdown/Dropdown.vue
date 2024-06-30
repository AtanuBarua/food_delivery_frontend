<template>
    <button class=" flex justify-center items-center ">
        <span class="mb-2">
            <img class="mt-2" :src="imageSrc" alt="">
        </span>
        <span>{{ label }}</span>
        <span class="mb-2">
            <img class="mt-2" src="/src/assets/dropdown.svg" alt="">
        </span>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        }
    }
}
</script>