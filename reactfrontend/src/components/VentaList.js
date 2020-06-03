import VentaPreview from './VentaPreview';
import ListPagination from './ListPagination';
import React from 'react';
import {Link} from "react-router-dom";

const VentaList = props => {
    if (!props.token) {
        return null;
    }
    if (!props.articles) {
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
                                 Venta de paquete
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
                                Lista de paquetes
                        </li>
                    </ul>
                </div>
            </form>
            {
                props.articles.map(venta => {
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
