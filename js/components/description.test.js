import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Description from './landing-page';

describe('<Description />', () => {
    it('Renders without crashing', () => {
        shallow(<Description />);
                });
    });
