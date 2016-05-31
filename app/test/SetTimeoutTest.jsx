import React from 'react';

export default class SetTimeoutTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ display: true }), this.props.delay * 1000);
    }

    render() {
        if (this.state.display) {
            return <div>{this.props.children}</div>
        }

        return (
            <div>Waiting {this.props.delay} seconds...</div>
        );
    }
};

SetTimeoutTest.propTypes = {
    delay: React.PropTypes.number.isRequired,
    children: React.PropTypes.element.isRequired
};
