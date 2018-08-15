import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class LoadImage extends Component {
constructor () {
    super();
    this.state = {
      lithuania: '',
      uk: ''
    }

    this.getImage('')
  }

  getImage (image) {

    firebase.storage().ref('images').child(`${image}.jpg`).getDownloadURL().then((url) => {
      console.log(url);

      this.setState({uk : url});
    }).catch((error) => {
      // Handle any errors
      console.log(' error in ... ' + error)
    })
  }


render() {
  return (
    <div className="user-info">
      <div className="container page">
        <div className="row">
          <div className="col-xs-12 col-md-10">
          <div className="settings-page">
            <div className="container page">
              <div className="row">
                <div className="col-md-6 offset-md-3 col-xs-12">

                  <h1 className="text-xs-center">Diagnostico del paciente #</h1>
  <form>
  <fieldset>   <fieldset className="form-group"> <br />
    <img src={ this.state.uk } alt="" /><br />  </fieldset>
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Descripcion del padecimiento "
        value={this.state.username}

        />
    </fieldset>
    </fieldset>

    <label></label>



          </form>
    			<button
    				className="btn btn-lg btn-primary pull-xs-right"
    				type="submit"
    				>
    				Guardar
    			</button>

        </div>
        </div>
        </div>
      </div> </div>
      </div>
      </div>
    </div> );
}
}
export default LoadImage;
