import React from 'react';
import { connect } from 'react-redux';
import './styles.css';


class BottomBar extends React.Component {
    render() {
        return (
            <div className="container">
                <audio controls autoPlay>
                    <source src={this.props.songs.url} type='audio/mpeg'></source>
                </audio>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(BottomBar);