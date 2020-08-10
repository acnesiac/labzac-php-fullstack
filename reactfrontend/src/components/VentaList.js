import VentaPreview from './VentaPreview';
import ListPagination from './ListPagination';
import React from 'react';
import {Link} from "react-router-dom";

const VentaList = props => {
    if (!props.token) {
        return null;

    }
    if (!props.lista) {
        return (
            <div className="article-preview">Loading...</div>
        );
    }
    return (
        <div>
            <form className="form-inline">
                <div className=" form-group">
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <Link to="/editorventa" className="btn btn-md btn-primary pull-xs-right">
                                Venta de estudio
                            </Link>
                        </li>
                    </ul>
                </div>
            </form>
            <br/>
            <form className="form-inline">
                <div className=" form-group">
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            Lista de estudios
                        </li>
                    </ul>
                </div>
            </form>
            {
                props.lista.map(venta => {
                    return (
                        <VentaPreview venta={venta} key={venta.slug}/>
                    );
                })
            }
            <ListPagination
                pager={props.pager}
                articlesCount={props.count}
                currentPage={props.currentPage}/>
        </div>
    );
};
export default VentaList;
