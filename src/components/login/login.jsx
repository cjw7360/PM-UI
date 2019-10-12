import React from "react"
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import "./login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <div>
            <h1 className="login-title">
              <strong>产量管理系统</strong>
            </h1>
            <Divider className="login-divider" />
            <Form onSubmit={this.handleSubmit} className="login-form">
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
                <Button type="primary" htmlType="submit" className="login-form-button">
                  <div className="login-button-text">登录</div>
                </Button>
              </Form.Item>
          </Form>
        </div>
      );
    }
}


export default Form.create({})(Login);