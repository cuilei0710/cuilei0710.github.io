import { UserConfig } from "vitepress";

const head: UserConfig['head'] = [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
];

export default head;