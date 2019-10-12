import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from '@/redux/store'
import Login from "@/components/login/login"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    click_button = () => {
        console.log("clicked")
    }


    render() {
        return (
            <Provider store={store}>
                <Login></Login>
            </Provider>
        );
    }
}

export default App;