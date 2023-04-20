import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';
import tabsPlugin from '@snippetors/vuepress-plugin-tabs';
import registerComponentsPlugin from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';

/* CONFIG: https://v2.vuepress.vuejs.org/reference/config.html#site-config */
export default defineUserConfig({
  base: '/',
  title: 'Build Gram',
  description: 'Build Gram Course in VuePress',
  head: [['link', { rel: 'icon', href: '/images/appIcon.png' }]],
  /* PLUGINS INSTALL: https://snippetors.github.io/plugins/vuepress-plugin-tabs.html */
  plugins: [
    tabsPlugin(['event1', 'event2']),
    registerComponentsPlugin({
      components: {
        iframeComp: path.resolve('./components/iframeComp.vue'),
      },
    }),
  ],

  bundler: viteBundler({
    // vite bundler options here
  }),
  /* THEME CONFIG: https://v2.vuepress.vuejs.org/guide/theme.html  */
  theme: defaultTheme({
    navbar: [
      {
        text: 'Courses',
        link: '/',
      },
      {
        text: 'Pricing',
        link: '/',
      },
      {
        text: 'About',
        link: '/',
      },
    ],
  }),
});
