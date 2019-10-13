import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from '@/redux/store'
import routeList from "@/router/routeList"
import renderRoute from "@/router/routeGen"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    { renderRoute(routeList, this.state.authed) }
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;