module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  //实现elementui按需加载  vue add element的时候自己会生成这个。
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}