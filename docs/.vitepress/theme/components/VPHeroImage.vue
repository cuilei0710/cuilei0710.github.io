<script setup lang="ts">
import { DefaultTheme, VPImage } from 'vitepress/theme';
import { getRandomInt } from '../../shared/utils';
import { onBeforeMount, onMounted, ref } from 'vue';

const image = ref<DefaultTheme.ThemeableImage>('');

const updateImage = () => {
    const randomImageNumber = getRandomInt(1, 11);
    image.value = `/index/hero_${randomImageNumber}.svg?t=${Date.now()}`;
};

onBeforeMount(() => {
    updateImage();
})

const handleImageError = () => {
    image.value = '/index/hero_1.svg';
};
</script>

<template>
    <VPImage v-if="image" class="image-src" :image @error="handleImageError" />
</template>