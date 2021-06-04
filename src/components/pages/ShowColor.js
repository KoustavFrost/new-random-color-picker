import React from 'react';

import {
    ButtonTypeOne,
    ColorIdDiv,
    MainDiv
} from './ShowColorElements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavigationBar from '../layouts/NavigationBar';

// Inline styles
const childDiv = {
    position: 'absolute',
    marginLeft: '-50px',
    left: '100vh',
    width: '6.25rem',
    bottom: '5rem'
};

class ShowColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorHex: '#ffffff'
        };

        this.randomiseColor = this.randomiseColor.bind(this);
    }

    randomiseColor() {
        let hex = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }

        this.setState({
            colorHex: color
        });
        try {
            // Copying the hex
            navigator.clipboard.writeText(color);
            toast.success('Color Hex copied to clipboard!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } catch (err) {
            console.error(err.message);
            toast.error('Failed to copy. Please select the hex and copy manually.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    render() {
        return (
            <>
                <MainDiv backgroundColor={this.state.colorHex}>
                    <NavigationBar />
                    <ToastContainer />
                    <ColorIdDiv>{this.state.colorHex}</ColorIdDiv>
                    <div style={childDiv}>
                        <ButtonTypeOne onClick={this.randomiseColor}>Randomize</ButtonTypeOne>
                    </div>
                </MainDiv>
            </>
        );
    }
}

export default ShowColor;