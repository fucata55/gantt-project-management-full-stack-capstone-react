import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section id='projectSection' className='hideMe'>
                <div className='center'>
                    <h1>Pro Players Soccer game</h1>
                    <div className='notificationBar hideMe'>There's a task that doesn't match with the project time frame</div>
                    <form action="" className='project-form inline-block project-summary' id=''>
                        <input className="longer-input" id='projectName' type="text" required />
                        <input className="longer-input" id='projectPredeccesor' type="text" required />
                        <input className="shorter-input" id='projectDuration' type="text" required />
                        <input className="shorter-input" id='projectStart' type="text" required />
                        <select name="status" id="projectStatus" required>
                            <option value="Planning">Planning</option>
                            <option value="On Going">On Going</option>
                            <option value="Paused">Paused</option>
                            <option value="Canceled">Canceled</option>
                            <option value="Complete">Complete</option>
                        </select>
                        <button className='center'>Save Edit</button>
                    </form>
                    <button id='deleteProjectButton'>Delete Project</button>
                </div>
                <div id="container"></div>
            <form action="" className='project-form' id='newTaskJS'>
            <input className="longer-input" id='newTaskName' type="text" placeholder="New Pro Players Soccer game" required />
            <input className="longer-input" id='newTaskPredeccesor' type="text" placeholder="New Bike and Build" required />
            <input className="shorter-input" id='newTaskDuration' type="number" min='0' placeholder="days" required />
            <input className="shorter-input" id='newTaskStart' type="text" placeholder="2018-01-20" required />
            <select name="status" id="newTaskStatus" required>
            <option value="Planning">Planning</option>
            <option value="On Going">On Going</option>
            <option value="Paused">Paused</option>
            <option value="Canceled">Canceled</option>
            <option value="Completed">Completed</option>
            </select>
            <button type='submit'>+ New Task</button>
            </form>
                    <table id='taskTable'>
                        <thead>
                            <tr className='table-headers'>
                                <th className='a'>Task Name</th>
                                <th className='b'>Predeccesor</th>
                                <th className='e'>Duration</th>
                                <th className='d'>Start Date</th>
                                <th className='d'>Finish Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
            </section>
        )
    }
}
