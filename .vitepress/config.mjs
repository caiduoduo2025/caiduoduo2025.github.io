import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "财多多",
    description: "你的智能投资理财管家",
    lang: 'zh-CN',
    appearance: false,
    head: [['link', {rel: 'icon', href: '/favicon.svg'}]],

    // Assuming the site will be deployed to a subdirectory if needed,
    // but for now leaving base as default '/' or user can configure it.
    // I will add a comment about this.
    base: '/',

    themeConfig: {
        logo: '/logo.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: '文档', link: '/docs/get-started/', activeMatch: '/docs/'}
        ],

        sidebar: {
            '/docs/': [
                {
                    text: '文档',
                    items: [
                        {text: '快速入门', link: '/docs/get-started/'},
                        // I will add more items here after migrating the docs
                    ]
                }
            ]
        },

        // socialLinks: [
            // {icon: 'github', link: 'https://github.com/caiduoduo2025/financial-manager'}
        // ],

        footer: {
            // message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025 财多多'
        }
    }
})

