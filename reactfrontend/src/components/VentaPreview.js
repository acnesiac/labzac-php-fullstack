import React from 'react';
import {connect} from 'react-redux';
import VentaActions from "./Venta/VentaActions";

const mapDispatchToProps = dispatch => ({});
const VentaPreview = props => {
    const venta = props.venta;
    return (
        <div className="article-preview">
            <VentaActions canModify={true} article={venta}/>
        </div>
    );
}
export default connect(() => ({}), mapDispatchToProps)(VentaPreview);
