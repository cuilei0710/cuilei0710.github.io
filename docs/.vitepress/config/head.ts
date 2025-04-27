import { UserConfig } from "vitepress";

const head: UserConfig['head'] = [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'preload', href: '/index/hero_1.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_2.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_3.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_4.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_5.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_6.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_7.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_8.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_9.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_10.svg', as: 'image' }],
    ['link', { rel: 'preload', href: '/index/hero_11.svg', as: 'image' }],
];

export default head;