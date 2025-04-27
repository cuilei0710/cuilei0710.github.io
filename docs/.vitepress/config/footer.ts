import { DefaultTheme } from 'vitepress';

const license: {
    href: string,
    text: string
} = {
    'href': 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    'text': 'CC BY-NC-ND 4.0'
};

const author: {
    email: string,
    name: string
} = {
    'email': 'cuilei0710@qq.com',
    'name': 'Bitter Gourd King'
};

const footer: DefaultTheme.Config["footer"] = {
    message: `Released under the <a href=${license.href} target='_blank' rel='noopener noreferrer'>${license.text}</a> License.`,
    copyright: `Copyright © 2023-Present <a href='mailto:${author.email}'>${author.name}</a>`,
};

export default footer;