/**
 * Created by cliente on 05/05/2017.
 */
import React from 'react'
import EmpleadoAvatar from './EmpleadoAvatar'

class EmpleadoRow extends React.Component {

    render() {
        return(
            <li className="media">
                <EmpleadoAvatar picture={this.props.id} />
                <div className="media-body">
                    <h4>{this.props.name}</h4>
                    <p>
                        {this.props.name} &nbsp;
                        <span className="label label-info">{this.props.name}</span>
                    </p>
                </div>
                <hr/>
            </li>
        )
    }
}

export default EmpleadoRow
