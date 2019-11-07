module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
    plugins: [
        [
            'component', /* 配置按需导入组件的插件 */
            {
                'libraryName': 'element-ui',
                'styleLibraryName': 'theme-chalk'
            }
        ]
    ]
}
