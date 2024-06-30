<template>
    <label :class="['cursor-pointer flex', marginTopClass]" :for="inputId"><span
            class="rounded-full inline-block border h-6 w-6 border-pink-600 bg-pink-500"><input class="ml-1"
                type="radio" :name="inputName" :checked="checked" :id="inputId"></span><span
            class="ml-2 text-sm hover:text-pink-600 font-mono">{{label}}</span></label>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        inputId: {
            type: String,
            required: true,
        },
        inputName: {
            type: String,
            required: true
        },
        marginTopClass: {
            type: String,
            default: 'mt-0'
        },
        checked: {
            type: Boolean,
            default: false
        }
    }
}
</script>