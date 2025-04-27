<script setup lang="ts">
import { DefaultTheme, VPImage } from 'vitepress/theme';
import { getRandomInt } from '../../shared/utils';
import { ref } from 'vue';

const image = ref<DefaultTheme.ThemeableImage>(`/index/hero_${getRandomInt(1, 11)}.svg`);

const handleImageError = () => {
    image.value = '/index/hero_1.svg';
};

</script>

<template>
    <VPImage v-if="image" class="image-src" :image @error="handleImageError" />
</template>