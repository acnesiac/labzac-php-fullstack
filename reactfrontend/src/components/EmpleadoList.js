/**
 * Created by cliente on 05/05/2017.
 */
import React from 'react'
import EmpleadoRow from './EmpleadoRow'

class EmpleadoList extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <ul className="media-list">
                    {
                        this.props.listado.map((empleado) => {
                            return <EmpleadoRow key={ empleado.id }
                                                name={ empleado.name }
 />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default EmpleadoList
