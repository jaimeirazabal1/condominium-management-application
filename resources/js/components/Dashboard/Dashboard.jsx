import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import MainContent from '../common/MainContent';

const Dashboard = () => {
    
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Header />
                    <MainContent style={{ flex: 1 }} />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
