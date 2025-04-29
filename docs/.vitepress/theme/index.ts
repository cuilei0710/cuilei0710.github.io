import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './style.css';

import Confetti from './components/Confetti.vue';
import Lichee from './components/Lichee.vue';
import VPHeroImage from './components/VPHeroImage.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h(VPHeroImage),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Lichee', Lichee);
    app.component('Confetti', Confetti);
  },
} satisfies Theme;
