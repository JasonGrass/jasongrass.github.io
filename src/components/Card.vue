<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
    info: {
        type: Object,
        default: () => { }
    }
})

const { title, description, url, icon, icon2 } = props.info

const cardIcon = ref("")

// 异步加载图标
import(icon).then(i => {
    cardIcon.value = i.default
}).catch(err => {
    // 如果失败，则使用备份的 ICON 链接
    console.warn("load icon error", err)
    cardIcon.value = icon2
}
)

const jumpLink = (e) => {
    if (url) {
        window.open(url, "_blank", "noopener, noreferrer")
    }
}

</script>

<template>
    <div class="item" @click="jumpLink">
        <div class="header">
            <img class="icon" :src="cardIcon" alt="">
            <span class="title">{{ title }}</span>
        </div>
        <span class="description">{{ description }}</span>
    </div>
</template>

<style lang="less" scoped>
.item {
    margin: 4px;
    padding: 8px;

    border: 1px solid #333;
    border-radius: 4px;

    text-align: left;
    transition: all .2s linear;

    &:hover {
        /*box-shadow: 1px 1px 4px 0px rgba(100, 100, 100, 0.54);*/
        box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
        transform: translate3d(0, -2px, 0);

        cursor: pointer;
    }
}

@media (prefers-color-scheme: light) {
    .item {
        border: 1px solid #eee;
    }
}


.header {
    display: flex;
    align-items: center;

    margin: 0 0 4px 0;
}

.icon {
    width: 48px;
    height: 48px;
}

.title {
    margin-left: 12px;
    font-size: 1.1rem;
}

.description {
    margin-top: 8px;

    font-size: 0.9rem;
    color: #666
}
</style>