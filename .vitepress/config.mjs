import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "财多多",
    description: "你的智能投资理财管家",
    lang: 'zh-CN',
    appearance: false,
    head: [
        ['link', {rel: 'icon', href: '/favicon.svg'}],
        ['meta', {name: 'keywords', content: '财多多, 投资理财, 投资软件, 理财软件, 投资组合管理, 智能建仓, 网格交易, 定投, 收益曲线, 收益分析, 个人财务系统, 仓位管理, 估值分析, 交易记录, 分红提醒'}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-Xyq1w8BIBg'}],
        ['meta', {property: 'og:title', content: '财多多 - 你的智能投资理财管家'}],
        ['meta', {property: 'og:description', content: '你的智能投资理财管家'}],
        ['meta', {property: 'og:image', content: 'https://cdd.fan/logo.png'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:url', content: 'https://cdd.fan/'}]
    ],
    sitemap: {
        hostname: 'https://cdd.fan'
    },

    // Assuming the site will be deployed to a subdirectory if needed,
    // but for now leaving base as default '/' or user can configure it.
    // I will add a comment about this.
    base: '/',
    // ignoreDeadLinks: true,
    markdown: {
        externalLinks: { target: '_blank', rel: 'noopener' }
    },

    themeConfig: {
        logo: '/logo.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {text: '文档', link: '/docs/windows-get-started', activeMatch: '/docs/'}
        ],

        sidebar: {
            '/docs/': [
                {
                    text: '文档',
                    items: [
                        {text: 'Windows电脑快速入门', link: '/docs/windows-get-started'},
                        {text: '苹果电脑快速入门', link: '/docs/mac-get-started'}
                        // {text: '价格更新配置', link: '/docs/price-update'},
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

