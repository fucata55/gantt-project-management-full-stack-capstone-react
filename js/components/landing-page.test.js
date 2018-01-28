import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Landing from './landing-page';

describe('<Landing />', () => {
    it('Renders without crashing', () => {
        shallow(<Landing />);
                });
    });
