<template>
    <div class="user relative w-1/5 ">
        <div class="group inline-block">
            <Dropdown label="Atanu" imageSrc="/src/assets/user.svg"/>
            <div class="absolute z-10  w-full rounded-lg shadow-lg hidden group-hover:block">
                <DropdownItem label="Orders and reordering" imageSrc="/src/assets/note.svg"/>
                <DropdownItem label="Help center" imageSrc="/src/assets/help.svg"/>
                <DropdownItem label="Logout" imageSrc="/src/assets/logout.svg"/>
            </div>
        </div>
    </div>
</template>
<script>
import Dropdown from '../Dropdown/Dropdown.vue';
import DropdownItem from '../Dropdown/DropdownItem.vue';
export default {
    name: 'HeaderUserSection',
    components: {
        DropdownItem, Dropdown
    }
} 
</script>