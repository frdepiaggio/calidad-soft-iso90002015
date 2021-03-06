const { description } = require('../../package');

module.exports = {
  base: '/calidad-sw-g2.github.io/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ISO 9000:2015 - Grupo 2',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '172x172', href: '/utn2.png' },
    ],
  ],

  theme: 'default-prefers-color-scheme',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    defaultTheme: 'dark',
    logo: '/logo-utn-white.png',
    repo: '',
    search: false,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: 'ISO 9000:2015',
        link: '/iso-90002015/norma.html',
      },
    ],
    sidebar: {
      '/iso-90002015/': [
        {
          title: 'ISO 9000:2015',
          collapsable: true,
          children: ['norma', 'mide', 'caracteristicas', 'casos-exitosos'],
        },
        {
          title: 'Extras',
          collapsable: false,
          children: ['referencias-utiles', 'preguntas', 'cuestionario'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
