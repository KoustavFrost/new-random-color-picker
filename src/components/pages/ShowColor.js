import React from 'react';

// Importing other packages
import {
    Row
} from 'react-bootstrap';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Importing the syled components
import {
    ButtonTypeOne,
    ColorIdDiv,
    MainDiv
} from './ShowColorElements';
import NavigationBar from '../layouts/NavigationBar';
import FooterBar from '../layouts/FooterBar';

// Inline styles
const div2 = {
    minHeight: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const div3 = {
    minHeight: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const div4 = { minHeight: '10vh' };

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
                    <ToastContainer />
                    <NavigationBar />
                    <Row style={div2}>
                        <ColorIdDiv>{this.state.colorHex}</ColorIdDiv>
                    </Row>
                    <Row style={div3}>
                        <ButtonTypeOne onClick={this.randomiseColor}>Randomize</ButtonTypeOne>
                    </Row>
                    <Row style={div4}>
                        {/* Here goes the footer */}
                        <FooterBar />
                    </Row>
                </MainDiv>
            </>
        );
    }
}

export default ShowColor;