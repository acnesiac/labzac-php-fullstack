import React from 'react';
import agent from '../../agent';
import {connect} from 'react-redux';
import {ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED} from '../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.article,
    currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({type: ARTICLE_PAGE_LOADED, payload}),
    onUnload: () =>
        dispatch({type: ARTICLE_PAGE_UNLOADED})
});

class Venta extends React.Component {
    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.Articles.all(this.props.match.params.id)
        ]));
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                        <div className="col-md-12">
                            <h1 className="text-xs-center">Lista de articulos vendidos</h1>
                        </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Venta);
