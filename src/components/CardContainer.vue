<template>
    <div class="container">
        <ul>
            <Card v-for="item in items1" :key="item.id" :info="item"></Card>
        </ul>
        <ul>
            <Card v-for="item in items2" :key="item.id" :info="item"></Card>
        </ul>
    </div>
</template>

<script setup>

import Card from './Card.vue'
import { activeBookmarks, inactiveBookmarks } from '../data/bookmark';

const items1 = activeBookmarks
const items2 = inactiveBookmarks

</script>

<style lang="less" scoped>
.container {
    margin-top: -16vh;
}

ul {
    display: grid;
    grid-template-columns: 360px 360px;

    margin: 48px 0
}
</style>