import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class BreakpointTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.onWindowResize());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.onWindowResize());
    }

    onWindowResize() {
        this.setState({ windowWidth: window.innerWidth });
    }

    renderContent(active) {
        if (active) {
            return (
                <ListGroup fill={true}>
                    {this.props.children.map((child) => (
                        <ListGroupItem>
                            {child}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            );
        } else {
            return 'Hidden';
        }
    }

    render() {
        let { minWidth } = this.props;
        let { windowWidth } = this.state;
        let active = windowWidth > minWidth;

        return (
            <Panel header={`Breakpoint: ${minWidth} - Current: ${windowWidth}`} bsStyle={active ? 'success' : 'danger'}>
                {this.renderContent(active)}
            </Panel>
        );
    }
};

BreakpointTest.propTypes = {
    minWidth: React.PropTypes.number.isRequired,
    children: React.PropTypes.node.isRequired
};
