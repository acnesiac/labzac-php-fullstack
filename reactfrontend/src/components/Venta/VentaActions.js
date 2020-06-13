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
            <h2>Paquete</h2>
            <p>
                <Link className="btn   btn-secondary  my-2" to={`/@${article.id}`}>{article.id}</Link>

                <Link className="btn   btn-secondary  my-2" to={`/editordiagnostico/${article.id}`}>
                    Iniciar Estudio
                </Link>
                <div>
                    {
                        article.diagnosticos.map(dx => {
                            return (
                                <Link className="btn   btn-secondary  my-2" key={dx.id} to={`/dx/${dx.id}`}>
                                    {dx.id}
                                </Link>
                            );
                        })
                    }
                </div>
            </p>
            <div className="rTable">
                <div className="rTableRow">
                    <div className="rTableHead"><strong>Costo</strong></div>
                    <div className="rTableHead"><strong>Desc</strong></div>
                </div>
                <div className="rTableRow">
                    <div className="rTableCell">${article.costo}</div>
                    <div className="rTableCell">{article.description}</div>
                </div>
            </div>


        </div>
    );
    return <span> </span>;
};
export default connect(
    () => ({}),
    mapDispatchToProps
)(VentaActions);
