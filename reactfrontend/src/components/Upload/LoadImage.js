import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class LoadImage extends Component {
  state = {
  username: '',
  avatar: '',
  isUploading: false,
  progress: 0,
  avatarURL: ''
};

handleChangeUsername = (event) => this.setState({username: event.target.value});

handleUploadStart = () => this.setState({isUploading: true, progress: 0});

handleProgress = (progress) => this.setState({progress});

handleUploadError = (error) => {
  this.setState({isUploading: false});
  console.error(error);
}

handleUploadSuccess = (filename) => {
  this.setState({avatar: filename, progress: 100, isUploading: false});
//  firebase.storage().ref('images/testid').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
};
constructor () {
    super();
    this.state = {
      lithuania: '',
      uk: ''
    }

    this.getImages('estudiorxtest1');
  }

  getImages (image) {

    firebase.storage().ref('images/testid').child(`${image}.jpg`).getDownloadURL().then((url) => {
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
                  <input type="text" value={this.state.username} name="username" onChange={this.handleChangeUsername}  />
                	<label> </label>
                		{this.state.isUploading &&
                	<p>Progress: {this.state.progress}</p>

                	}
                	{this.state.avatarURL &&
                	<img src={this.state.avatarURL} />
                	}
                	<label style={{ weight:0, backgroundColor: 'steelblue', color: 'white', padding: 4,  margin: 6,  borderRadius: 5, pointer: 'hand'}}>

                      Sube tu imagen RX
                				<FileUploader
                				hidden style={{ weight:0}}
                				storageRef={firebase.storage().ref('images/testid1')}
                			filename={file => this.state.username }

                	accept="image/*"
                	name="avatar"
                	randomizeFilename
                	onUploadStart={this.handleUploadStart}
                	onUploadError={this.handleUploadError}
                	onUploadSuccess={this.handleUploadSuccess}
                	onProgress={this.handleProgress}
                	/>
                	</label>
  <form>
  <fieldset>   <fieldset className="form-group"> <br />
    <img src={ this.state.uk } height="400" width="400" /><br />  </fieldset>
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Comentarios el padecimiento... "
        value={this.state.username}

        />
    </fieldset>
    </fieldset>

    <label></label>



          </form>


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
