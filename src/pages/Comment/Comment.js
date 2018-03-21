import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/comment';
import { Link } from 'react-router-dom';
const book = require('../../assets/images/book.jpg')
import { connect } from 'react-redux';

class Comment extends Component {
    render() {
        return (
            <div className="mt20">
                <div className="row flex-xl-nowrap">
                    <div className="col-12 col-md-8 pull-md-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="u-ttl3">
                                    <h2>书评广场</h2>
                                </div>
                                <div className="media text-muted pt-3 border-bottom">
                                    <div>
                                        <img className="ui-book ui-book-wd96" src={book} alt="" />
                                        <p className="text-center mt20 ui-b-com">时间静思</p>
                                    </div>

                                    <p className="media-body pb-3 mb-0 small lh-125  border-gray">
                                        <span className="ui-book-describe">说实话这本书真的就是霍金先生自己简单的回顾介绍，各大读书应用都近20元是不值得的，还是这个所谓限时优惠合理些，9.99元也不便宜，毕竟内容实在太少。我是伴随着电影《万物理论》的配乐看完这本书的，原来在霍金先生眼中，他对第一任妻子是充满了爱与恨，没办法啊，即使有正常健康的伴侣，人都普遍会出轨，对好看的肉体的渴望是动物无法抗拒的本能。记得从前看过媒体的社会统计，医务人员的偷情率是最高的，高达近70%，其次才是公司企业文职人员近60%。霍金先生的痛心无助是我们无法想象的，可以通过这些资料看出他不想失去简，但他知道自己早就失去了她，他无法满足她正常的渴求。</span>
                                    </p>
                                </div>
                                <div className="media text-muted pt-3 border-bottom">
                                    <div>
                                        <img className="ui-book ui-book-wd96" src={book} alt="" />
                                        <p className="text-center mt20 ui-b-com">时间静思</p>
                                    </div>

                                    <p className="media-body pb-3 mb-0 small lh-125  border-gray">
                                        <span className="ui-book-describe">说实话这本书真的就是霍金先生自己简单的回顾介绍，各大读书应用都近20元是不值得的，还是这个所谓限时优惠合理些，9.99元也不便宜，毕竟内容实在太少。我是伴随着电影《万物理论》的配乐看完这本书的，原来在霍金先生眼中，他对第一任妻子是充满了爱与恨，没办法啊，即使有正常健康的伴侣，人都普遍会出轨，对好看的肉体的渴望是动物无法抗拒的本能。记得从前看过媒体的社会统计，医务人员的偷情率是最高的，高达近70%，其次才是公司企业文职人员近60%。霍金先生的痛心无助是我们无法想象的，可以通过这些资料看出他不想失去简，但他知道自己早就失去了她，他无法满足她正常的渴求。</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <main className="col-12 col-md-3 col-xl-4 bd-sidebar   ">
                                    <h5 className="ui-bool-headline">书评广场</h5>
                    <div className="row">
                            <div className="col-12 ">
                                <div className="media text-muted pt-3 mb20">
                                    <img className="ui-book ui-book-wd75" src={book} alt="" />
                                    <p className="media-body pb-3 mb-0 small lh-125  border-gray">
                                        <p className="ui-book-tit">时间简史</p>
                                        <p className="ui-book-user">英】史蒂芬·霍金</p>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="media text-muted pt-3 mb30">
                                    <img className="ui-book ui-book-wd75" src={book} alt="" />
                                    <p className="media-body pb-3 mb-0 small lh-125  border-gray">
                                        <p className="ui-book-tit">时间简史</p>
                                        <p className="ui-book-user">英】史蒂芬·霍金</p>
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

const mapStateToProps = (state) => {
    return {
        comment: state.comment
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);