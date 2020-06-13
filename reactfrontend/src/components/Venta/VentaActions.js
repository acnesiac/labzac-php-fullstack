import {Link} from "react-router-dom";
import React from "react";
import agent from "../../agent";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({});

const VentaActions = props => {
    const article = props.article;

    function handleClick(e) {
        e.preventDefault();
        agent.Diagnosticos.byVenta(article.id);
    }

    return (
        <div>
            <Link className="btn   btn-secondary  my-2" to={`/@${article.id}`}>{article.id}</Link>
            <h2>Paquete</h2>
            <div className="rTable">
                <div className="rTableRow">
                    <div className="rTableHead"><strong>Name</strong></div>
                    <div className="rTableHead"><span >Telephone</span></div>
                    <div className="rTableHead">&nbsp;</div>
                </div>
                <div className="rTableRow">
                    <div className="rTableCell">John</div>
                    <div className="rTableCell"><a href="tel:0123456785">0123 456 785</a></div>
                    <div className="rTableCell"><img src="images/check.gif" alt="checked"/></div>
                </div>
                <div className="rTableRow">
                    <div className="rTableCell">Cassie</div>
                    <div className="rTableCell"><a href="tel:9876532432">9876 532 432</a></div>
                    <div className="rTableCell"><img src="images/check.gif" alt="checked"/></div>
                </div>
            </div>
            <p>
            <span>${article.costo}</span>
            <h1>{article.cliente.email}</h1>
            <span>{article.cliente.title}</span>
            <span>{article.description}</span>
            </p>
            <p>
                <Link className="btn   btn-secondary  my-2" to={`/editordiagnostico/${article.id}`}>
                    Iniciar Estudio
                </Link>
                <ul>
                    {
                        article.diagnosticos.map(dx => {
                            return (
                                <Link key={dx.id} to={`/dx/${dx.id}`}>
                                    {dx.id}
                                </Link>
                            );
                        })
                    }
                </ul>
            </p>

        </div>
    );
    return <span> </span>;
};
export default connect(
    () => ({}),
    mapDispatchToProps
)(VentaActions);
