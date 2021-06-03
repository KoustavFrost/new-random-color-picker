import React from 'react';

import NavigationBar from '../layouts/NavigationBar';

const ShowColor = () => {
    const fullPageDiv = {
        minHeight: "100vh"
    };

    return (
        <div style={fullPageDiv}>
            <NavigationBar />
            <h1>This is the main page</h1>
        </div>
    );
};

export default ShowColor;