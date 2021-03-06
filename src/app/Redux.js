import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from "./redux/AppReducer";
import {App} from "./App";

export default class Redux extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}