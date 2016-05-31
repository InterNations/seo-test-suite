import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import request from '../request';

export default class PopoverTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
    }

    renderPopoverContent() {
        let { children } = this.props;
        let ajaxContent = this.state.content;
        let popoverContent;

        if (!children) {
            if (ajaxContent) {
                popoverContent = <div dangerouslySetInnerHTML={{__html: ajaxContent }} />;
            } else {
                popoverContent = (
                    <div>Loading...</div>
                );
            }
        } else {
            popoverContent = children;
        }

        return (
            <Popover title="Popover test" id="test">{popoverContent}</Popover>
        );
    }

    onOverlayEntering() {
        let { children } = this.props;

        if (!children) {
            request(this.props.name, this.props.delay)
                .then(({content}) => this.setState({ content }));
        }
    }

    render() {
        return (
            <OverlayTrigger
                trigger={this.props.trigger}
                placement="bottom"
                rootClose
                overlay={this.renderPopoverContent()}
                onEntering={() => this.onOverlayEntering()}>
              <Button bsStyle="default">{this.props.trigger} for more info</Button>
            </OverlayTrigger>
        );
    }
};

PopoverTest.defaultProps = {
    delay: 0
};

PopoverTest.propTypes = {
    name: React.PropTypes.string,
    delay: React.PropTypes.number,
    content: React.PropTypes.string,
    trigger: React.PropTypes.oneOf(['hover', 'click']).isRequired,
    children: React.PropTypes.node
};
