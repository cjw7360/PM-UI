import React from "react"
import {connect} from 'react-redux'  //引入连接器
import store from "@/redux/store"

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    storeChange = () => {
      this.setState(store.getState())
    }

    render() {
        return <h1>hahaha</h1>
    }

}


export default connect(null, null)(MainPage)