import { defineConfig, defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  srcDir: './src',
  lang: 'zh-Hans',
  title: "Naldo Blog",
  titleTemplate: 'Naldo-Blog',
  description: "site description",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/introduction' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/uestcNaldo/blog-site-vp' }
    ],

    // search: {
    //   provider: 'local'
    // }
    footer: {
      message: 'Released under the <a href="https://github.com/uestcNaldo/blog-site-vp/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a>.',
      copyright: 'Copyright ©️ 2023-present <a href="https://github.com/uestcNaldo/blog-site-vp" target="_blank" rel="noreferrer">uestcNaldo</a>'
    },
  }
})
