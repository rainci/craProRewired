/*
 * @Author: your name
 * @Date: 2019-12-18 14:49:41
 * @LastEditTime : 2019-12-18 14:55:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /craProRewired/src/router/index.js
 */
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './main'
// import OneCom from '../pages/one'
class RouteMap extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" component={Main} />
                </div>
            </Router>
        )
    }
}

export default RouteMap;
