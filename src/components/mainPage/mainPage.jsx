import React from "react"
import {connect} from 'react-redux'  //引入连接器
import {  Route, Link  } from "react-router-dom";
import action_type from "@/redux/actionTypes"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./mainPage.css"

import SubPageEnter from "@/components/subPageEnter/subPageEnter"
import SubPageCheck from "@/components/subPageCheck/subPageCheck"
import SubPageExport from "@/components/subPageExport/subPageExport"

const { Header, Content, Footer, Sider } = Layout;

const MainPage = (props) => {
    
    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Sider collapsible collapsed={props.collapsed} onCollapse={props.collapse_change}
                width="30vw"
                collapsedWidth="10.7vw" >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to="/mainPage/subPageEnter">
                            <Icon type="pie-chart" /><span>录入</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/mainPage/subPageCheck">
                            <Icon type="desktop" /><span>查看</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/mainPage/subPageExport">
                            <Icon type="file" /><span>导出</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header />
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ margin: '16px 0' }} />
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Route exact path="/mainPage/subPageEnter"   component={SubPageEnter} />
                        <Route exact path="/mainPage/subPageCheck"   component={SubPageCheck} />
                        <Route exact path="/mainPage/subPageExport"   component={SubPageExport} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
    

}

//将store内的属性一一对应到本组件的props中
// store_value -> state_value
const stateToProps = (state)=>{
    return {
    // props内属性名字 : store内属性名字
      user_name : state.user_name,
      authed : state.authed,
      collapsed : state.collapsed
    }
}
  
  const dispatchToProps = (dispatch) => {
    return {
        collapse_change(collapsed_value) {
            let action = {
                type : action_type.set_collapsed,
                value : collapsed_value
            }
            dispatch(action)
        }
    }
  }


export default connect(stateToProps, dispatchToProps)(MainPage)