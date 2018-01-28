import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Project from './project';

describe('<Project />', () => {
    it('Renders without crashing', () => {
        shallow(<Project />);
                });
    });
