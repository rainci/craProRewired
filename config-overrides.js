/*
 * @Author: rainci
 * @Date: 2019-12-18 16:09:59
 * @LastEditTime : 2019-12-18 16:11:49
 * @LastEditors  : rainci
 * @Description: 配置webpack，react-app-rewired（2.x版本）启动，
 * 需要配置插件：
 * react-scripts@>=2.1.3;
 * customize-cra;（react-app-rewired（2.x版本)依赖）
 * babel-loader@8.0.4;
 * 
 * @FilePath: /craProRewired/config-overrides.js
 */
const { override, disableEsLint, fixBabelImports, addLessLoader } = require('customize-cra');

const rewiredMap = () => config => {//关闭sorcemap
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};
// module.exports = function override(config, env) {
//     // 关于webpack的相关配置
//     return config;
// };

module.exports = override(//按需加载
    // 关于webpack的相关配置

    // 关闭mapSource
    rewiredMap(),
    // disable eslint in webpack
    disableEsLint(),
    fixBabelImports('import', {//按需加载，测试是否生效，不引入ant css，直接 { Button } from 'antd',查看样式是否生效，依赖：babel-plugin-import
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({//将less转换成css 依赖：less，less-loader
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    })
)

