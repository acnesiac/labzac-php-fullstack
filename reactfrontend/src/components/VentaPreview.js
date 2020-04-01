import React from 'react';
import {connect} from 'react-redux';
import ArticleActions from './Article/ArticleActions';

const mapDispatchToProps = dispatch => ({});
const VentaPreview = props => {
    const venta = props.venta;
    return (
        <div className="article-preview">
            <ArticleActions canModify={true} article={venta}/>
        </div>
    );
}
export default connect(() => ({}), mapDispatchToProps)(VentaPreview);
