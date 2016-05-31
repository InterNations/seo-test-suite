import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ControlSuite from './suite/ControlSuite';
import SetTimeoutSuite from './suite/SetTimeoutSuite';
import AJAXSuite from './suite/AJAXSuite';
import JSONLDSuite from './suite/JSONLDSuite';
import FormControlSuite from './suite/FormControlSuite';
import JSComponentSuite from './suite/JSComponentSuite';
import BreakpointSuite from './suite/BreakpointSuite';

export class App extends React.Component {
    render() {
        return (
            <div>
                <ControlSuite />
                <SetTimeoutSuite />
                <JSONLDSuite />
                <AJAXSuite />
                <BreakpointSuite />
                <JSComponentSuite />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
