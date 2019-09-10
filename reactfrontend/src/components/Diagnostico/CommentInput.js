import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSubmit: payload =>
    dispatch({ type: ADD_COMMENT, payload })
});

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      body: ''
    };

    this.setBody = ev => {
      this.setState({ body: ev.target.value });
    };

    this.createComment = ev => {
      ev.preventDefault();
      const payload = agent.Comments.create(this.props.slug,
        { body: this.state.body });
      this.setState({ body: '' });
      this.props.onSubmit(payload);
    };
  }

  render() {
    return (
      <form className="card comment-form" onSubmit={this.createComment}>

        <fieldset className="form-group">
        
        <input
          className="form-control"
          type="text"
          placeholder="Fecha"
          value={this.props.tagInput}
          onChange={this.changeTagInput}
          onKeyUp={this.watchForEnter} />

        <input
          className="form-control"
          type="text"
          placeholder="Hora"
          value={this.props.tagInput}
          onChange={this.changeTagInput}
          onKeyUp={this.watchForEnter} />

          <textarea className="form-control"
            placeholder="Evolucion de paciente ..."
            value={this.state.body}
            onChange={this.setBody}
            rows="3">
          </textarea>
        
        <div className="card-footer">

          <button
            className="btn btn-sm btn-primary"
            type="submit">
            Detalles
          </button>
        </div>
        <button
          className="btn btn-lg pull-xs-right btn-primary"
          type="button"
          disabled={this.props.inProgress}
          onClick={this.submitForm}>
          Salvar paciente
        </button>

                </fieldset>

        
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
