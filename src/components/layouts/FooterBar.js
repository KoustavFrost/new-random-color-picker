import React, { Component } from 'react';
// Importing other packages

import {
    InnerFooterStyle,
    FooterStyle
} from './FooterBarElements';
import Emoji from '../Emoji';

export default class FooterBar extends Component {
    render() {
        return (
            <div>
                <FooterStyle>
                    <InnerFooterStyle>
                        Made with <Emoji symbol="🧡" /> and React; <a style={{ textDecoration: 'none' }} href="https://github.com/KoustavFrost/new-random-color-picker">Github</a>
                    </InnerFooterStyle>
                </FooterStyle>
            </div>
        )
    }
}