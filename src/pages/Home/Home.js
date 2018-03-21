import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';


const routerList = [
    { path: '/', label: '全部图书',num:'999213' },
    { path: '/novel', label: '小说',num:'999213' },
    { path: '/administered', label: '经管',num:'999213' },
    { path: '/success', label: '成功励志',num:'999213' },
    { path: '/social', label: '人文社科',num:'999213' },
    { path: '/computer', label: '计算机' ,num:'999213'}
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagType: '',
            postList: [],
            count: 0
        }
    }


    render() {
        return (
            <div>
                <div className="row flex-xl-nowrap">
                    <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                        <nav className="bd-links" id="docsNavbarContent">
                            <div className="bd-toc-item">
                                {
                                    routerList.map(router => {
                                    return (
                                        <Link key={router.path} className={this.state.tagType === router.type ? 'bd-toc-link active' :'bd-toc-link'} to="/">
                                            <span className="bd-toc">{router.label}</span>
                                            <em className="num">{router.num}</em>
                                        </Link>
                                    )
                                    })
                                }
                              
                        
                            </div>
                        </nav>
                    </div>

                    <main className="col-12 col-md-10 pull-md-3 bd-content">
                        <p>全部图书全部图书全部图书</p>
                    </main>
                </div>
            </div>
        )
    }
}

export default hot(module)(Home);