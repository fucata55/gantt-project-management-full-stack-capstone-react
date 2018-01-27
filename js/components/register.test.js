import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Register from './header';

describe('<Register />', () => {
    it('Renders without crashing', () => {
        shallow(<Register />);
                });
    });
