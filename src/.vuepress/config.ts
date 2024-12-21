import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/yibu_zzn/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "郑振宁 · 28",
      description: "数字资产园区",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
