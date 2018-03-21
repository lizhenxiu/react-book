import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const logo = require('../../assets/images/logo.png')
export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-md navbar-dark bg-dark">
                <nav className=" navbar-collapse">
                    <a className="navbar-brand" href="#"><img src={logo} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link col-fff active" to="/">首页</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link col-fff" to="/page1">榜单</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link col-fff" to="/comment">书评</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link col-fff" to="/userinfo">精品</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link col-fff" to="/sort">分类</Link>
                        </li>
                    </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="搜索"/>
                            <button className="btn my-2 my-sm-0 ui-btn-main" type="submit">搜索</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}