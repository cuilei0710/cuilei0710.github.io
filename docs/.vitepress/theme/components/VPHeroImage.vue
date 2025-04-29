<script setup lang="ts">
import { DefaultTheme, VPImage } from 'vitepress/theme';
import { getRandomInt } from '../../shared/utils';
import { onMounted, ref } from 'vue';

const image = ref<DefaultTheme.ThemeableImage>('');

const updateImage = () => {
    const randomImageNumber = getRandomInt(1, 11);
    image.value = `/index/hero_${randomImageNumber}.svg`;
};

const handleImageError = () => {
    image.value = '/index/hero_1.svg';
};

onMounted(() => {
    updateImage();
})
</script>

<template>
    <VPImage v-if="image" class="image-src rounded-3xl origin-top-left rotate-2 " :image @error="handleImageError" />
</template>