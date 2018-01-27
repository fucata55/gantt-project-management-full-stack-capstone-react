import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Description from '../js/components/description'

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Header />,document.getElementById('reactHeader'));
} );

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Description />,document.getElementById('reactDescription'));
} );
