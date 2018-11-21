import React from 'react';
import Table from '../table';
import './styles.css';

export default class SongsScreen extends React.Component {
    render() {
        return (
            <div className='main-screen'>
                <h1 className='title'>Welcome to BruinPlay!</h1>
                <div className='table-wrapper'>
                    <Table />
                </div>
            </div>
        )
    }
}