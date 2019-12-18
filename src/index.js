/*
 * @Author: rainci
 * @Date: 2018-11-07 11:38:32
 * @LastEditTime : 2019-12-18 14:39:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /craProRewired/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware } from 'redux';
// import CounterContainer from './containers/CounterContainer';
// import InputContainer from './containers/InputContainer';
// import reducers from './reducers/index';
import App from './App';
// const middleware = ({ dispatch, getState }) => next => action => {
//     console.log('next', next, action);
//     console.log('state-whr:', getState())
//     const state = next(action);
//     console.log('state-whr2:', getState())

//     return state;
// }

// const store = createStore(reducers, applyMiddleware(middleware));
ReactDOM.render(
    // <Provider store={store}>
        <App />,
    // </Provider>,
     document.getElementById('root')
);



// 发布订阅模式：
// let evnets = {
//     namespace: {},
//     on(name, fn){
//         this.namespace[name] = fn;
//     },
//     emit(name, ...args){
//         this.namespace[name](...args);
//     }
// }

// evnets.on('lyx', (n) => console.log('lyx', n));
// evnets.on('lff', (n) => console.log('lff', n));
 
// window.evnets = evnets;

// evnets.emit('lyx', 3);

// let fbEvent = {
//     eventSpace: {},
//     on(name,fn){
//         this.eventSpace[name] = fn;
//     },
//     emit(name,...args){
//         this.eventSpace[name](...args);
//     }
// };
// fbEvent.on('xx', n => console.log('xx:',n));
// fbEvent.on('xx2', n => console.log('xx2:',n));
// window.fbEvent = fbEvent;








// function f(){
//     const liu = 5;
//     return {
//         getLiu(){
//             return liu;
//         }
//     }
// }

// let o = f();

// let l1 = o.getLiu();
