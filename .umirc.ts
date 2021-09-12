import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      name: '',
      title: '',
      component: '@/layouts/BasicLayout',
      routes: [
        { exact: true, path: '/', redirect: '/list/search' },
        {
          path: '/list',
          name: '列表页',
          title: '列表页',
          icon: 'AppleOutlined',
          routes: [
            { exact: true, path: '/list', redirect: '/list/search' },
            {
              path: 'search',
              component: '@/pages/search/SearchList',
              name: '搜索列表',
              title: '搜索列表',
              icon: 'IeOutlined',
              hideInMenu: false,
            },
            {
              path: 'standard',
              component: '@/pages/standard/StandardList',
              name: '标准列表',
              title: '标准列表',
              icon: 'ChromeOutlined',
              hideInMenu: false,
            },
          ],
        },
      ],
    },
  ],
  fastRefresh: {},
});
