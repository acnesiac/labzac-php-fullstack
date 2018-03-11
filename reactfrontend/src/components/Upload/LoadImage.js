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
        Hello Lithuania<br />
        <img src={ this.state.uk } alt="Lithuanian flag" />
        <br />
        Hello United Kingdom<br />
        <img src={ this.state.uk } alt="UK flag" />
      </div>  );
}
}
export default LoadImage;