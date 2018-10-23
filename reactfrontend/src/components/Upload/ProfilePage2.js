import React, {Component} from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";


var config = {
    apiKey: "AIzaSyBqWC-AHjyG4xd3mnXHECz0uKH2piAhOOk",
    authDomain: "uploadrx-92ff0.firebaseapp.com",
    databaseURL: "https://uploadrx-92ff0.firebaseio.com",
    projectId: "uploadrx-92ff0",
    storageBucket: "uploadrx-92ff0.appspot.com",
    messagingSenderId: "30483709073"
};

class ProfilePage extends Component {

    constructor() {
        super();
        firebase.initializeApp(config);

    }

    state = {
        username: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    handleChangeUsername = event =>
        this.setState({username: event.target.value});

    handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    handleProgress = progress => this.setState({progress});
    handleUploadError = error => {
        this.setState({isUploading: false});
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({avatar: filename, progress: 100, isUploading: false});
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({avatarURL: url}));
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">



                    </div>
                    <label></label>
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    {this.state.avatarURL && <img src={this.state.avatarURL}/>}
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </form>
            </div>
        );
    }
}

export default ProfilePage;