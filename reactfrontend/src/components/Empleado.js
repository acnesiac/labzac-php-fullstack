/**
 * Created by cliente on 05/05/2017.
 */
import React from 'react'
import EmpleadoList from './EmpleadoList'

class EmpleadoApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {empleados: []}
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                return response.json()
            })
            .then((empleados) => {
                this.setState({empleados: empleados})
            })
    }

    render() {
        console.log('inside render' + this.state.empleados);
        if (this.state.empleados.length > 0) {
            return (
                <div className="container">
                <div className="container-fluid">
                    <EmpleadoList listado={this.state.empleados}/>
                </div>
                </div>
            )
        } else {
            return <p className="text-center">Cargando empleados...</p>
        }
    }

}

export default EmpleadoApp
