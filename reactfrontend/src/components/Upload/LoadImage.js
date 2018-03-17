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
      <div>
            <div className="home-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-12 offset-md-0 col-xs-12">

          One<br />
          <img src={ this.state.uk } alt="" />
        </div>
        <br />
            <div className="col-md-12 offset-md-0 col-xs-12">
        
        2<br />
        <img src={ this.state.uk } alt="UK flag" />
        </div>
        </div>
        </div>
        </div>
      </div>  );
}
}
export default LoadImage;