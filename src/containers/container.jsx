import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {connect} from 'react-redux'  //引入连接器
import routeList from "@/router/routeList"
import renderRoute from "@/router/routeGen"

const Container = (props) => {
    return (
        <BrowserRouter>
                    { renderRoute(routeList, props.authed) }
        </BrowserRouter>
    )
}

const stateToProps = (state)=>{
    return {
      authed : state.authed
    }
}

export default connect(stateToProps, null)(Container)