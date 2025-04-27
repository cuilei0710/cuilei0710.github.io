import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import VPHeroImage from './components/VPHeroImage.vue'
import Lichee from './components/Lichee.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h(VPHeroImage)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Lichee', Lichee)
  }
} satisfies Theme
