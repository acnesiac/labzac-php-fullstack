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

        this.changeNombre = updateFieldEvent('nombre');
        this.changeEmail = updateFieldEvent('email');
        this.changeDireccion = updateFieldEvent('direccion');

        this.watchForEnter = ev => {
            if (ev.keyCode === 13) {
                ev.preventDefault();
                this.props.onAddTag();
            }
        };
        this.submitForm = ev => {
            ev.preventDefault();
            const cliente = {
                nombre: this.props.nombre,
                email: this.props.email,
                direccion: this.props.direccion
            };
            const id = {id: this.props.id};
            const promise = this.props.id ?
                agent.Clientes.update(Object.assign(cliente, id)) :
                agent.Clientes.create(cliente);
            this.props.onSubmit(promise);
        };
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {

    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 offset-md-0 col-xs-12">
                            <form>
                                <fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="nombre"
                                            value={this.props.nombre}
                                            onChange={this.changeNombre}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="email"
                                            value={this.props.email}
                                            onChange={this.changeEmail}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="8"
                                            placeholder="Escribe la direccion y rumbo"
                                            value={this.props.direccion}
                                            onChange={this.changeDireccion}>
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
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorCliente);
