import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import axios from 'axios';
import './styles.css';


class UploadZone extends React.Component {
    onDrop(acceptedFiles, rejectedFiles) {
        var formData = new FormData();
        for (let file of acceptedFiles) {
            formData.append('file', file);
        }
        const postURL = 'http://localhost:5000/'
        axios.post(postURL, {
            body: formData
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <Dropzone onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)} style={styles.dropzone}>Click here to upload files</Dropzone>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8vh'  
    },
    dropzone: {
        border: 'solid 1px',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        verticalAlign: 'center'
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(UploadZone);