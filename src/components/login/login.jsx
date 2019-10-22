import React from "react"
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'  //引入连接器
import axios from "axios"
import { Form, Icon, Input, Button, Checkbox, Divider, message } from 'antd';
import action_type from "@/redux/actionTypes"
import "./login.css"

var isButtonClickable = true

const Login = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            isButtonClickable = false
            message.loading("正在登录...", 1.5, null)
            axios.post("http://easymock.pureff.cn:4000/mock/5daeb6196f5c130020f4f011/clemon/login", {"username":values.username, "passwd":values.password}, {timeout: 2000}).then( (resp) => {
              if (resp.data.authed)  {
                values.authed = true
                props.login_submit(values)
                message.success('登录成功。');
                props.history.push("/mainPage")
              }
              else{
                isButtonClickable = true
                values.authed = false
                props.login_submit(values)
                message.error('用户名或密码错误。')
              }
            }).catch( () => {
              message.error('发生了一些错误，请稍后重试。')
              isButtonClickable = true
              // values.authed = true
              // props.login_submit(values)
              // message.success('登录成功。');
              // props.history.push("/mainPage")
            }) 
          }
        });
    };

    const { getFieldDecorator } = props.form;
    return (
      <div>
        <h1 className="login-title">
          <strong>产量管理系统</strong>
        </h1>
        <Divider className="login-divider" />
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" disabled={!isButtonClickable} className="login-form-button">
              <div className="login-button-text">登录</div>
            </Button>
          </Form.Item>
      </Form>
    </div>
  );  
}

//将store内的属性一一对应到本组件的props中
// store_value -> state_value
const stateToProps = (state)=>{
  return {
    user_name : state.user_name,
    user_passwd : state.user_passwd,
    authed : state.authed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    login_submit(values) {
      let action = {
          type : action_type.login,
          user_name : values.username,
          user_passwd : values.password,
          authed : values.authed
      }
      dispatch(action)
    }
  }
}


const form_before_connect = Form.create({})(Login)
export default withRouter(connect(stateToProps, dispatchToProps)(form_before_connect))