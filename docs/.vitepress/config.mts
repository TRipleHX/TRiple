import { defineConfig } from 'vitepress'
import { nav, sidebar, head } from './configs'
import timeline from 'vitepress-markdown-timeline'

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: 'HuaXia RP',

  // 站点语言
  lang: 'cn',

  // 网站头部
  head,

  // 站点介绍
  description:'',
    // '网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clasn,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 源目录
  srcDir: 'src',

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark-dimmed'
    },
    config: (md) => {
      md.use(timeline)
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  //true强制开启深色模式 false强制开启浅色模式
  // appearance: false,

  // 站点地图
  sitemap: {
    hostname: 'https://theovan.xyz',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  themeConfig: {
    // // logo
    logo: '/avatar.png',

    // 社交链接
    socialLinks: [{ icon: {svg:'<svg t="1698046642695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4052" width="200" height="200"><path d="M909.824 664.576C891.392 553.984 814.08 481.28 814.08 481.28c11.264-100.864-29.696-118.784-29.696-118.784-8.192-311.296-266.752-305.664-272.384-305.664-5.632 0-264.192-5.632-272.384 305.664 0 0-40.448 17.92-29.696 118.784 0 0-77.312 72.704-95.744 183.296 0 0-9.728 187.392 88.576 23.04 0 0 22.016 62.464 62.464 118.784 0 0-72.704 25.6-66.56 91.648 0 0-2.56 73.728 154.624 68.608 0 0 110.592-8.704 143.872-57.344h29.184c33.28 48.64 143.872 57.344 143.872 57.344 157.184 5.12 154.624-68.608 154.624-68.608 6.144-66.048-66.56-91.648-66.56-91.648 40.448-56.32 62.464-118.784 62.464-118.784 98.816 164.352 89.088-23.04 89.088-23.04z" p-id="4053"></path></svg>'}, 
    link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=IxVw0gWvG38nhg4B0abxY9-50fa4WhTC&authKey=B8p4UCZTFCTfGvnkJcUtohF%2FDeaJYy9cTS3eQvP6vWDgDgyzxfzWesU3p0QOTn%2FF&noverify=0&group_code=748124792' }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    // editLink: {
    //   pattern:
    //     'https://github.com/Theo-messi/VitePress/blob/main/docs/src/:path',
    //   text: '为此页提供修改建议'
    // },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: { text: '上次更新' },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // algolia搜索
    // algolia,

    // 底部信息
    footer: {
      message: 'Huaxia Roleplay',
      copyright:
        '2012 - 2023'
    }
  }
})
