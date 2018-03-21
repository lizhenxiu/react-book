import React, { Component } from 'react';
import style from './Page1.css';
import { Link } from 'react-router-dom';
const book = require('../../assets/images/book.jpg')
const routerList = [
    { path: '/', label: '榜单家族', num: '999213' },
    { path: '/novel', label: '畅销榜', num: '999213' },
    { path: '/administered', label: '月度榜', num: '999213' },
    { path: '/success', label: '好评榜', num: '999213' },
    { path: '/social', label: '免费榜', num: '999213' },
    { path: '/computer', label: '豆瓣好评', num: '999213' }
]

export default class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagType: '',
            postList: [],
        }
    }
    render() {
        return (
            <div className="mt20">
                <div className="row flex-xl-nowrap">
                    <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                        <nav className="bd-links">
                            <div className="bd-toc-item ui-title">
                                <h3>榜单导航</h3>
                                {
                                    routerList.map(router => {
                                        return (
                                            <Link key={router.path} className="ui-page-list" to="/" >
                                                <span className="bd-toc">{router.label}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </nav>
                    </div>
                    <main className="col-12 col-md-10 pull-md-3 bd-content">
                        {/* <div className="row">
                            <div className="col-6">
                            <div className="my-3 p-3 rounded box-shadow">
                                    <h5 className="pb-3">畅销榜 
                                        <small className="d-block text-right mt-3">
                                         <a href="#">更多</a>
                                    </small></h5>
                                    <div className="media-body  small  border-bottom border-gray">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="lh-125-st" to="/"><em>1.</em>学校不教，父母不讲，但你一定要懂得这样为人处世</Link>
                                            <span className="ui-author">史蒂夫.霍金</span>
                                        </div>
                                    </div>
                                    <div className="media-body  small  border-bottom border-gray">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="lh-125-st" to="/"><em>2.</em>学校不教，父母不讲，但你一定要懂得这样为人处世</Link>
                                            <span className="ui-author">史蒂夫.霍金</span>
                                        </div>
                                    </div>
                                    <div className="media-body  small  border-bottom border-gray">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="lh-125-st" to="/"><em>3.</em>学校不教，父母不讲，但你一定要懂得这样为人处世</Link>
                                            <span className="ui-author">史蒂夫.霍金</span>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="my-3 p-3 rounded box-shadow">
                                    <h5 className="pb-3">畅销榜</h5>
                                    <div className="media-body  small  border-bottom border-gray">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="lh-125-st" to="/"><em>1.</em>学校不教，父母不讲，但你一定要懂得这样为人处世</Link>
                                            <span className="ui-author">史蒂夫.霍金</span>
                                        </div>
                                    </div>
                                    <div className="media-body  small  border-bottom border-gray">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="lh-125-st" to="/"><em>2.</em>学校不教，父母不讲，但你一定要懂得这样为人处世</Link>
                                            <span className="ui-author">史蒂夫.霍金</span>
                                        </div>
                                    </div>
                                    <div className="media-body  small  border-bottom border-gray">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link className="lh-125-st" to="/"><em>3.</em>学校不教，父母不讲，但你一定要懂得这样为人处世</Link>
                                            <span className="ui-author">史蒂夫.霍金</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-6">
                                <div className="media text-muted pt-3">
                                    <img className="ui-book ui-book-wd96" src={book} alt="" />
                                    <p className="media-body pb-3 mb-0 small lh-125  border-gray">
                                        <p className="ui-book-tit">时间简史</p>
                                        <p className="ui-book-user">英】史蒂芬·霍金</p>
                                        <span className="ui-book-describe">科学著作的里程碑，每个人都能看懂，了解宇宙第一书！</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="media text-muted pt-3">
                                    <img className="ui-book ui-book-wd96" src={book} alt="" />
                                    <p className="media-body pb-3 mb-0 small lh-125  border-gray">
                                        <p className="ui-book-tit">时间简史</p>
                                        <p className="ui-book-user">英】史蒂芬·霍金</p>
                                        <span className="ui-book-describe">科学著作的里程碑，每个人都能看懂，了解宇宙第一书！</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        )
    }
}