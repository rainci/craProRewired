import React from "react";
import { Layout } from 'antd';
import { Route, } from 'react-router-dom';

import OneCom from '../pages/one'

const { Content, Sider } = Layout;

class Main extends React.Component{
    render(){
        return(
            <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        menu side
                    </Sider>
                    <Content style={{ padding: '10px' }}>
                        <div style={{ background: '#fff', padding: 24, height:"100%",overflow:"auto" }}>
                            <Route path="/main/one" component={OneCom} exact/>
                        </div>
                    </Content>
            </Layout>                                  
        )
    }
}
export default Main;
