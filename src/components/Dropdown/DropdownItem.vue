<template>
    <a href="#" class="block py-3 px-4 bg-slate-50 hover:bg-pink-100">
        <div class="flex ">
            <img :src="imageSrc" alt="">
            <span class="ml-2">{{ label }}</span>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        imageSrc: String,
        required: true
    }
}
</script>