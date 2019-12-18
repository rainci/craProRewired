/*
 * @Author: your name
 * @Date: 2019-12-18 14:48:58
 * @LastEditTime : 2019-12-18 15:40:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /craProRewired/src/App.js
 */
import React, { Component } from 'react';
import RouteMap from './router'
import './App.css';
// import { LocaleProvider,message } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
// message.config({
//   maxCount: 1,
// });

class App extends Component {
  render() {
    return (
      // <LocaleProvider locale={zh_CN}>
      <div className="App">
        <RouteMap />
      </div>
      // </LocaleProvider>
    );
  }
}

export default App;
