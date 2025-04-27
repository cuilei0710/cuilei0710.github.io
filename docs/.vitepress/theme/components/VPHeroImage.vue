<script setup lang="ts">
import { DefaultTheme, VPImage } from 'vitepress/theme';
import { getRandomInt } from '../../shared/utils';
import { onBeforeMount, ref } from 'vue';

const image = ref<DefaultTheme.ThemeableImage>('');

const updateImage = () => {
    const randomImageNumber = getRandomInt(1, 11);
    image.value = getImageURL(randomImageNumber);
};

const getImageURL = (index: number) => {
    return `/index/hero_${index}.svg`;
}

const handleImageError = () => {
    image.value = '/index/hero_1.svg';
};

onBeforeMount(() => {
    updateImage();
})
</script>

<template>
    <VPImage v-if="image" class="image-src" :image @error="handleImageError" />
</template>