import React, {Component} from 'react';

import Header from 'components/Header/Header';
import getRouter from 'router/router';
import 'bootstrap/dist/css/bootstrap.min.css'




export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container mt20">
                {getRouter()}
                </div>
               
            </div>
        )
    }
}