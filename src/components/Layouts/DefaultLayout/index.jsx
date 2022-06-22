import React from 'react';
import { Feed, Navbar, Rightbar, Sidebar } from '../components';
import './DefaultLayout.scss'

const DefaultLayout = () => {
    return (
        <div id='hvd-default-layout'>
            <Navbar />

            <div className="hvd-content-layout">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </div>

    );
};

export default DefaultLayout;
