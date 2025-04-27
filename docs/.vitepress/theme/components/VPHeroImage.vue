<script setup lang="ts">
import { DefaultTheme, VPImage } from 'vitepress/theme';
import { getRandomInt } from '../../shared/utils';
import { onMounted, ref } from 'vue';

const image = ref<DefaultTheme.ThemeableImage>('');

const updateImage = () => {
    const randomImageNumber = getRandomInt(1, 11);
    const newImageURL = getImageURL(randomImageNumber);
    image.value = (image.value !== newImageURL) ?
        newImageURL :
        getImageURL(randomImageNumber + 1);

    console.log('newURL' + image.value);
};

onMounted(() => {
    console.log('startURL' + image.value)
    updateImage();
})

const getImageURL = (index: number) => {
    return `/index/hero_${index}.svg`;
}

const handleImageError = () => {
    image.value = '/index/hero_1.svg';
};
</script>

<template>
    <VPImage v-if="image" class="image-src" :image @error="handleImageError" />
</template>