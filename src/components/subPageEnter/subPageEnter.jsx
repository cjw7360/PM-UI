import React from "react"
import {connect} from 'react-redux'  //引入连接器
import action_type from "@/redux/actionTypes"

import { 
    DatePicker,
    Form,
    Input,
    InputNumber,
    Modal,
    Select,
    Button,
    AutoComplete
} from 'antd'

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };



const SubPageEnter = (props) => {
    let onChange = (e) => {
        e.preventDefault()
        props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
        })
      }


    const { getFieldDecorator } = props.form

    return (
        <div>  
        <Modal
        title="添加新条目"
        visible={props.visible}
        // onOk={this.handleOk}
        onCancel={props.submitNewItemVisible}
        >
            <p>名称：</p><Input />
            <p>数量：</p><InputNumber />
        </Modal>
        <Button type="primary" onClick={props.submitNewItemVisible}>添加</Button>
        <Form {...formItemLayout} onSubmit={onChange}>
            <Form.Item label="日期">
            {getFieldDecorator('date-picker', {
                rules: [
                { 
                    type: 'object', 
                    required: true, 
                    message: '请输入日期!'
                },
                ],
            })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="今日产量">
            {getFieldDecorator('mount', {
                rules: [
                {
                    required: true,
                    message: '请输入产量!',
                },
                ],
            })(<InputNumber />)}
            </Form.Item>
            <Form.Item label="工厂">
            {getFieldDecorator('target', {
                // initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                rules: [
                { required: true, message: '请选择厂商!' },
                ],
                })(
                <Select style={{ width: 120 }}>
                    <Option value="1">高川1号</Option>
                    <Option value="2">溧水总厂</Option>
                    <Option value="w1">泰国厂</Option>
                </Select>)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

//将store内的属性一一对应到本组件的props中
// store_value -> state_value
const stateToProps = (state)=>{
    return {
        visible : state.enterNewItem.visible,

    }
}

const dispatchToProps = (dispatch) => {
    return {
        submitNewItemVisible() {
            let action = {
                type : action_type.updateNewItemVisible
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Form.create()(SubPageEnter))