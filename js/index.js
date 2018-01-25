import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';


document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Header />,
                                                  document.getElementById('reactHeader'));} );
