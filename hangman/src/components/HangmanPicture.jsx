import React from 'react';
import './HangmanPicture.css'

const image0 = require('./img/0.png');
const image1 = require('./img/1.png');
const image2 = require('./img/2.png');
const image3 = require('./img/3.png');
const image4 = require('./img/4.png');
const image5 = require('./img/5.png');
const image6 = require('./img/6.png');
const image7 = require('./img/7.png');
const image8 = require('./img/8.png');
const image9 = require('./img/9.png');
const image10 = require('./img/10.png');

const hangmanImages = [
    image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10
];

const HangmanPicture = (props) => {
    return <img src={hangmanImages[props.hangmanState]} alt={'Something went wrong.'}></img>
};

export default HangmanPicture;