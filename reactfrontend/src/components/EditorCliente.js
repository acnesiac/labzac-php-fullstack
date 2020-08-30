import React from 'react';
import agent from '../agent';
import {connect} from 'react-redux';
import {
    EDITORCLIENTE_PAGE_LOADED,
    EDITORCLIENTE_PAGE_UNLOADED,
    UPDATE_FIELD_EDITORCLIENTE, EDITORCLIENTE_SUBMITTED
} from '../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.editorcliente
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({type: EDITORCLIENTE_PAGE_LOADED, payload}),
    onSubmit: payload =>
        dispatch({type: EDITORCLIENTE_SUBMITTED, payload}),
    onUnload: payload =>
        dispatch({type: EDITORCLIENTE_PAGE_UNLOADED}),
    onUpdateField: (key, value) =>
        dispatch({type: UPDATE_FIELD_EDITORCLIENTE, key, value})
});

class EditorCliente extends React.Component {
    constructor() {
        super();
        const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value);

        this.changeDescription = updateFieldEvent('description');
        this.changeCosto = updateFieldEvent('costo');
        this.changeTitle = updateFieldEvent('title');
        this.changeCliente = updateFieldEvent('cliente');
        this.changeBody = updateFieldEvent('body');
        this.watchForEnter = ev => {
            if (ev.keyCode === 13) {
                ev.preventDefault();
                this.props.onAddTag();
            }
        };
        this.submitForm = ev => {
            ev.preventDefault();
            const venta = {
                description: this.props.description,
                costo: this.props.costo,
                cliente: this.props.cliente,
                title: this.props.title,
                body: this.props.body
            };
            const slug = {slug: this.props.articleSlug};
            const promise = this.props.articleSlug ?
                agent.Ventas.update(Object.assign(venta, slug)) :
                agent.Ventas.create(venta);
            this.props.onSubmit(promise);
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            if (nextProps.match.params.slug) {
                this.props.onUnload();
                return this.props.onLoad(agent.Diagnosticos.get(this.props.match.params.slug));
            }
            this.props.onLoad(null);
        }
    }

    componentWillMount() {
        if (this.props.match.params.slug) {
            return this.props.onLoad(agent.Diagnosticos.get(this.props.match.params.slug));
        }
        this.props.onLoad(null);
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div className="editor-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-12 offset-md-0 col-xs-12">
                            <form>
                                <fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="nombre"
                                            value={this.props.description}
                                            onChange={this.changeDescription}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="email"
                                            value={this.props.description}
                                            onChange={this.changeDescription}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="8"
                                            placeholder="Escribe la direccion y rumbo"
                                            value={this.props.body}
                                            onChange={this.changeBody}>
                                        </textarea>
                                    </fieldset>


                                    <button
                                        className="btn btn-lg pull-xs-right btn-primary"
                                        type="button"
                                        disabled={this.props.inProgress} onClick={this.submitForm}>
                                        Alta de cliente
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

export default connect(mapStateToProps, mapDispatchToProps)(EditorCliente);
