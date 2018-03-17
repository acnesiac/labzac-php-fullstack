import ListErrors from '../ListErrors';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.editor
});

const mapDispatchToProps = dispatch => ({
  onAddTag: () =>
    dispatch({ type: ADD_TAG }),
  onLoad: payload =>
    dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: tag =>
    dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: payload =>
    dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: payload =>
    dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
});

class HourEditor extends React.Component {
  constructor() {
    super();

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    this.changeBody = updateFieldEvent('body');
    this.changeTagInput = updateFieldEvent('tagInput');

    this.watchForEnter = ev => {
      if (ev.keyCode === 13) {
        ev.preventDefault();
        this.props.onAddTag();
      }
    };

    this.removeTagHandler = tag => () => {
      this.props.onRemoveTag(tag);
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const article = {
        title: this.props.title,
        description: this.props.description,
        body: this.props.body,
        tagList: this.props.tagList
      };

      const slug = { slug: this.props.articleSlug };

      const promise = this.props.articleSlug ?
        agent.Articles.update(Object.assign(article, slug)) :
        agent.Articles.create(article);

      this.props.onSubmit(promise);
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.match.params.slug);
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onUnload();
        return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
      }
      this.props.onLoad(null);
    }
  }

  componentWillMount() {
    if (this.props.match.params.slug) {
      return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-12 offset-md-0 col-xs-12">
              <ListErrors errors={this.props.errors}></ListErrors>
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <label>Presion Arterial</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="PA"
                      onChange={this.changeDescription} />
                  </fieldset>
                  <fieldset className="form-group">
                     <label>Glucosa</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                      onChange={this.changeDescription} />
                  </fieldset>
                  <fieldset className="form-group">
                     <label>Medicamento </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                      onChange={this.changeDescription} />
                  </fieldset>
                

                    


                      <Link to={`/article/`+this.props.title} className="author" > 
                           <button
                              className="btn btn-lg  btn-primary"
                              type="button"
                              disabled={this.props.inProgress}
                              >
                              Regresar
                            </button>                             
                    </Link>

                    <Link to={'/graphchart2d'} className="btn btn-lg btn-primary" role="button"> 
                                Grafica
                    </Link>

                      
                      
                      
                      <button
                        className="btn btn-lg pull-xs-right btn-primary"
                        type="button"
                        disabled={this.props.inProgress}
                        onClick={this.submitForm}>
                        Salvar
                      </button>

                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HourEditor);
