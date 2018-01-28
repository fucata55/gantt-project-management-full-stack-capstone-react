import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section id='homePage' className='hideMe'>
                <table id='projectTable'>
                    <thead>
                        <tr className='table-headers'>
                            <th className='a'>Project Name</th>
                            <th className='b'>Predeccesor</th>
                            <th className='e'>Duration Days</th>
                            <th className='d'>Start Date</th>
                            <th className='d'>Finish Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan='6'>
                                <form action="" className='project-form' id='newProjectJS'>
                                    <input className="longer-input" id='newProjectName' type="text" placeholder="New Pro Players Soccer game" value required />
                                    <input className="longer-input" id='newProjectPredeccesor' type="text" placeholder="New Bike and Build" required />
                                    <input className="shorter-input" id='newProjectDuration' type="number" min='0' placeholder="days" required />
                                    <input className="shorter-input" id='newProjectStart' type="text" placeholder="2018-01-20" required />
                                    <select name="status" id="status" required>
                                        <option value="Planning">Planning</option>
                                        <option value="On Going">On Going</option>
                                        <option value="Paused">Paused</option>
                                        <option value="Canceled">Canceled</option>
                                        <option value="Completed">Complete</option>
                                    </select>
                                    <button type='submit'>+ New Project</button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}
