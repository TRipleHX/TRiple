import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  // { text: '导航', link: 'nav' },
  { text: '文档记录', items: Nav_Docs(), activeMatch: '/skill/' },
  { text: '公职信息', items: Nav_Vps(), activeMatch: '/VPS/' },
  { text: '前端物语', items: Nav_Fe(), activeMatch: '/fe/' },

  // { text: 'ESXI安装指南', items: Nav_Esxi(), activeMatch: '/ESXI/' },
  // { text: '青龙面板', items: Nav_Ql(), activeMatch: '/Docker/' },
  // { text: '我的网站', items: Nav_Zd() }
]

// 文档记录
export function Nav_Docs() {
  return [
    {
      items: [
        { text: '介绍', link: '/skill/JL-02' },
        { text: '按键操作', link: '/skill/JL-01' },
        { text: '服务器手册', link: '/skill/JL-03' },
        { text: '音乐外链如何使用', link: 'https://mp3.ltyuanfang.cn/' },
        { text: '音乐外链', link: 'https://mp3.ltyuanfang.cn/' },
        // { text: '梅林操作文档', link: '/skill/ML-01' }
      ]
    }
  ]
}

// 前端物语
export function Nav_Fe() {
  return [
    {
      items: [
        { text: 'JavaScript 基础知识', link: '/fe/javascript/types' },
        { text: 'HTML / CSS', link: '/fe/html/' },
        { text: 'ES6 常用知识点', link: '/fe/es6/' },
        { text: 'TypeScript', link: '/fe/typescript/base' }
      ]
    },
    {
      items: [
        { text: '工程化项目原理', link: '/fe/gc/GC-01' },
        { text: '浏览器知识', link: '/fe/browser/' },
        { text: '概念知识点', link: '/fe/concept/module' },
        { text: '编程题', link: '/fe/coding/' }
      ]
    }
  ]
}

// VPS使用指南
export function Nav_Vps() {
  return [
    {
      items: [
        { text: 'LSPD', link: '' },
        { text: 'LSFD', link: '' },
        { text: 'CH', link: '' }
      ]
    }
  ]
}

// ESXI安装指南
export function Nav_Esxi() {
  return [
    {
      items: [
        { text: 'ESXi 8.0安装', link: '/ESXI/ESXI-01' },
        { text: 'ESXI — OpenWrt', link: '/ESXI/OP-01' }
      ]
    }
  ]
}

// 青龙面板
export function Nav_Ql() {
  return [
    {
      items: [
        { text: '安装青龙面板', link: '/Docker/QL-01' },
        { text: '获取京东Cookie', link: '/Docker/JD-01' },
        { text: '获取阿里云盘Cookie', link: '/Docker/AL-01' }
      ]
    }
  ]
}
// 个人站点
export function Nav_Zd() {
  return [
    {
      items: [
        { text: '流媒体森林', link: 'https://theovan.wiki/' },
        { text: '玄学宝典', link: 'https://xx.theovan.xyz/' },
        { text: 'ChatGPT', link: 'https://ai.theovan.xyz/' },
        { text: '赞助我', link: 'https://github.com/sponsors/Theo-messi' }
      ]
    }
  ]
}
