import React from 'react';
import { Panel } from 'react-bootstrap';
import request from '../request';

export default class AJAXTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: null
        };
    }

    componentDidMount() {
        request(this.props.name, this.props.delay)
            .then(({ content }) => this.setState({ response: { content } }))
    }

    render() {
        let { response } = this.state;
        let { name, delay } = this.props;
        return (
            <Panel header={`AJAX Content Test: ${name} - ${delay} second delay`} bsStyle={response ? 'success' : 'danger'}>
                { response ? <div dangerouslySetInnerHTML={{__html:response.content}} /> : 'loading...' }
            </Panel>
        );
    }
};

AJAXTest.propTypes = {
    name: React.PropTypes.string.isRequired,
    delay: React.PropTypes.number.isRequired
};
