import React from 'react';
import {
    Header,
    Nav,
    NavText
} from './NavElements';

const NavigationBar = () => {
    return (
        <>
            <Header>
                <Nav>
                    <NavText>
                        Random Color Picker
                    </NavText>
                </Nav>
            </Header>
        </>
    );
};

export default NavigationBar;