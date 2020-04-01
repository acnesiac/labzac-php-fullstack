import {Link} from "react-router-dom";
import React from "react";
import agent from "../../agent";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({});

const ArticleActions = props => {
    const article = props.article;
    function handleClick(e) {
        e.preventDefault();
        agent.Diagnosticos.byVenta(article.id);
    }
    return (
        <div>
            <p>
                <Link className="btn   btn-secondary  my-2" to={`/@${article.id}`}>{article.id}</Link> |
                <Link className="btn   btn-secondary  my-2" to={`/editordiagnostico/${article.id}`}>
                    Iniciar DX
                </Link>
            </p>
            <div>{article.cliente.email}</div>
            <h1>{article.title}</h1>
            <h1>{article.description}</h1>
            <h2>${article.costo}</h2>
            <ul>
                {
                    article.diagnosticos.map(dx => {
                        return (
                            <Link key={dx.id} to={`/dx/${dx.id}`}>{dx.id}</Link>
                        );
                    })
                }
            </ul>
        </div>
    );
    return <span> </span>;
};
export default connect(
    () => ({}),
    mapDispatchToProps
)(ArticleActions);
