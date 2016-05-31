import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import request from '../request';

const EventComponent = ({ name, startDate, url, location }) => (
    <div>
        <h2>{name}</h2>
        <div>Takes place on {startDate} at <a href={location.sameAs}>{location.name}</a></div>
        <div><a href={url}>More Information</a></div>
    </div>
);

const ForumComponent = ({ datePublished, image, url, headline }) => (
    <div>
        <img src={image} alt="AuthorPhoto" />
        <h2>{headline}</h2>
        <div>Posted on {datePublished}</div>
        <div><a href={url}>See Post</a></div>
    </div>
);

export default class JSONLDTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entities: null
        };
    }

    componentDidMount() {
        request(this.props.name, 0)
            .then(entities => {
                if (!Array.isArray(entities)) {
                    entities = [entities];
                }
                return this.setState({ entities });
            });
    }

    renderEntities(entities) {
        let Component;

        if (!entities) {
            return;
        }

        if (this.props.name === 'events') {
            Component = EventComponent;
        } else {
            Component = ForumComponent;
        }

        return (
            <ListGroup fill={true}>
                {entities.map(entity => (
                    <ListGroupItem>
                        <Component {...entity} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        );

    }

    render() {
        let { entities } = this.state;
        let { name, delay } = this.props;
        return (
            <Panel header={`JSON-LD Test: ${name}`}>
                {this.renderEntities(entities)}
            </Panel>
        );
    }
};

JSONLDTest.propTypes = {
    name: React.PropTypes.string.isRequired
};
