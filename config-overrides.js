/*
 * @Author: your name
 * @Date: 2019-12-18 16:09:59
 * @LastEditTime : 2019-12-18 16:11:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
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
    // fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: true,
    // }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: { '@primary-color': '#1DA57A' },
    // })
)

