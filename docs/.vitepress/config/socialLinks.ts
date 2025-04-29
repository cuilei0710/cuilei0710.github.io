import type { DefaultTheme } from "vitepress/theme";

type SocialLinks = DefaultTheme.Config['socialLinks'];

const fackbookSVG: string = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M17 1H3c-1.1 0 -2 1 -2 2v14c0 1.1 1 2 2 2h7v-7H8V9.5h2v-2c0 -2.2 1.2 -3.7 3.8 -3.7l1.8 0v2.6h-1.2c-1 0 -1.4 0.7 -1.4 1.4v1.7h2.6L15 12h-2v7h4c1.1 0 2 -1 2 -2V3c0 -1.1 -1 -2 -2 -2"/></svg>'
const slackSVG: string = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.2 14.6c0 1.2 -1 2.1 -2.1 2.1a2.1 2.1 0 0 1 -2.1 -2.1a2.1 2.1 0 0 1 2.1 -2.1h2.1zm1.1 0c0 -1.2 1 -2.1 2.1 -2.1a2.1 2.1 0 0 1 2.1 2.1v5.3a2.1 2.1 0 0 1 -2.1 2.1a2.1 2.1 0 0 1 -2.1 -2.1zm2.1 -8.5c-1.2 0 -2.1 -1 -2.1 -2.1s1 -2.1 2.1 -2.1a2.1 2.1 0 0 1 2.1 2.1v2.1zm0 1.1a2.1 2.1 0 0 1 2.1 2.1a2.1 2.1 0 0 1 -2.1 2.1H4a2.1 2.1 0 0 1 -2.1 -2.1a2.1 2.1 0 0 1 2.1 -2.1zm8.4 2.1c0 -1.2 1 -2.1 2.1 -2.1a2.1 2.1 0 0 1 2.1 2.1a2.1 2.1 0 0 1 -2.1 2.1h-2.1zm-1.1 0c0 1.2 -1 2.1 -2.1 2.1a2.1 2.1 0 0 1 -2.1 -2.1V4a2.1 2.1 0 0 1 2.1 -2.1c1.2 0 2.1 1 2.1 2.1zm-2.1 8.5c1.2 0 2.1 1 2.1 2.1s-1 2.1 -2.1 2.1a2.1 2.1 0 0 1 -2.1 -2.1v-2.1zm0 -1.1a2.1 2.1 0 0 1 -2.1 -2.1a2.1 2.1 0 0 1 2.1 -2.1h5.3a2.1 2.1 0 0 1 2.1 2.1a2.1 2.1 0 0 1 -2.1 2.1z"/></svg>';

/**
 * ICON URL LIST
 * icones - https://icones.js.org/
 */
const socialLinks: SocialLinks = [
    {
        icon: 'github',
        link: 'https://github.com/cuilei0710/cuilei0710.github.io',
        ariaLabel: 'github'
    },
    {
        icon: {
            svg: fackbookSVG
        },
        link: 'https://github.com/cuilei0710/cuilei0710.github.io',
        ariaLabel: 'facebook'
    },
    {
        icon: {
            svg: slackSVG
        },
        link: 'https://github.com/cuilei0710/cuilei0710.github.io',
        ariaLabel: 'slack'
    }
];

export default socialLinks;
