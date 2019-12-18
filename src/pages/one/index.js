/*
 * @Author: your name
 * @Date: 2019-12-18 15:00:14
 * @LastEditTime : 2019-12-18 15:07:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /craProRewired/src/pages/one/index.js
 */
import React,{PureComponent} from "react";
import './css/index.less'
class OneCom extends  PureComponent  {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="oneContainer">
                one test！
                <p className="title">i am one title </p>
            </div>
        )
    }
}
export default OneCom