import React from 'react';
import './styles.css';

export default class BottomBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <p className="text">{this.props.song.name}</p>
                <p className="text">{this.props.song.artist}</p>
            </div>
        )
    }
}