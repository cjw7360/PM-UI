import React from "react"
import {connect} from 'react-redux'  //引入连接器
import action_type from "@/redux/actionTypes"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./mainPage.css"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MainPage = (props) => {
    
    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Sider collapsible collapsed={props.collapsed} onCollapse={props.collapse_change}
                width="30vw"
                collapsedWidth="10.7vw" >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" inlineCollapsed={props.collapsed}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <Icon type="user" />
                            <span>User</span>
                        </span>
                        }
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
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