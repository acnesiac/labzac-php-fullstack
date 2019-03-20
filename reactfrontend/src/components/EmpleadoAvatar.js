/**
 * Created by cliente on 05/05/2017.
 */
import React from 'react'

class EmpleadoAvatar extends React.Component {
    render() {

        let picture = this.props.picture;

        return (

            <figure className="media-left">
                <img className="media-object" width="64px" src={ 'faces/' + Math.floor(Math.random() * (15-1) + 1) + '.jpg '} />
            </figure>
        )
    }
}

export default EmpleadoAvatar
