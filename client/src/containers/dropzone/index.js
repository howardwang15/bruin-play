import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import './styles.css';


class UploadZone extends React.Component {
    onDrop(acceptedFiles, rejectedFiles) {

    }

    render() {
        return (
            <Dropzone onDrop={(files) => this.onDrop(files)}></Dropzone>
        )
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(UploadZone);