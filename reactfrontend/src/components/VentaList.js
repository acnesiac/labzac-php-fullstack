import VentaPreview from './VentaPreview';
import ListPagination from './ListPagination';
import SearchButton from './SearchButton';
import React from 'react';
import {Link} from "react-router-dom";

const VentaList = props => {
    if (!props.token) {
        return null;

    }
    
    return (
        <div>
            <form className="form-inline">
                <div className=" form-group">

                </div>
            </form>
            <form className="form-inline">

                <button type="submit" className="btn btn-primary mb-2">Buscar todos</button>
                <Link to="/editorventa" className="btn btn-md btn-primary ">
                    Venta de estudio
                </Link>
                <SearchButton show={true}/>
            </form>
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
