import React, { Children } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const Suite = ({name, children}) => (
    <Panel header={<h1>{name}</h1>}>
        <ListGroup fill={true}>
            {Children.map(children, (child) => (
                <ListGroupItem>
                    {child}
                </ListGroupItem>
            ))}
        </ListGroup>
    </Panel>
);

Suite.propTypes = {
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired
};

export default Suite;
