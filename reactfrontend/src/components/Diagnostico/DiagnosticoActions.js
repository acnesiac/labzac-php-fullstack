import { Link } from "react-router-dom";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { DELETE_ARTICLE } from "../../constants/actionTypes";

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({
      type: DELETE_ARTICLE,
      payload
    })
});

const DiagnosticoActions = props => {
  const diagnostico = props.diagnostico;
    return (
      <span>
         <span className="date">
            {diagnostico.description}
        </span>
        <h1>{diagnostico.title}</h1>
        <Link to={`/@${diagnostico.id}`} />
        <span >
        </span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul>
        </ul>
        </div>
        </nav>
      </span>
    );

  return <span> </span>;
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(DiagnosticoActions);
