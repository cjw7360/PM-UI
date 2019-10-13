import React from "react"
import {connect} from 'react-redux'  //引入连接器
import action_type from "@/redux/actionTypes"

const MainPage = (props) => {
    
    return (
        <div>
            <h1>{props.num}</h1>
            <div>
                <button onClick={props.anniuanxia}>anniu</button>
            </div>
        </div>
        )
    

}

//将store内的属性一一对应到本组件的props中
// store_value -> state_value
const stateToProps = (state)=>{
    return {
      user_name : state.user_name,
      authed : state.authed,
      num : state.num
    }
}
  
  const dispatchToProps = (dispatch) => {
    return {
        anniuanxia() {
            let action = {
                type : action_type.add,
                num : 2
            }
            dispatch(action)
        }
    }
  }


export default connect(stateToProps, dispatchToProps)(MainPage)