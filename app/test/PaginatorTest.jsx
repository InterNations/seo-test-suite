import React from 'react';
import { Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import request from '../request';

const MAX_PAGE = 2;

export default class PaginatorTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fetching: false,
            page: -1,
            pageData: []
        };
    }

    componentDidMount() {
        this.fetchNextPage();

        window.addEventListener('scroll', () => this.onWindowScroll());
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.onWindowScroll());
    }

    onWindowScroll() {
        let button = this.refs.loadMoreButton;

        if (!this.props.infinite || !button) {
            return;
        }

        let el = button && button.getDOMNode();
        let scrollTop = (window.pageYOffset !== undefined) ?
            window.pageYOffset :
            (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (topPosition(el) + el.offsetHeight - scrollTop - window.innerHeight < 50) {
            this.fetchNextPage();
        }
    }

    fetchNextPage() {
        if (this.state.fetching || this.state.page >= MAX_PAGE) {
            return;
        }

        let pageNum = this.state.page + 1;
        this.setState({ fetching: true });

        request(this.props.name + pageNum, this.props.delay)
            .then(({content}) => {
                this.setState({
                    pageData: [...this.state.pageData, { content }],
                    page: this.state.page + 1,
                    fetching: false
                });
            });
    }

    renderPage(pageData) {
        return (
            <ListGroupItem>
                <div dangerouslySetInnerHTML={{__html:pageData.content}} />
            </ListGroupItem>
        );
    }

    render() {
        let footer;
        if (this.state.fetching) {
            footer = <div>Fetching...</div>;
        } else if (this.state.page < MAX_PAGE) {
            footer = <Button ref="loadMoreButton" onClick={() => this.fetchNextPage()}>Fetch Next Page</Button>;
        }
        return (
            <div>
                <Panel header={this.props.name}>
                    <ListGroup fill={true}>
                        {this.state.pageData.map(this.renderPage)}
                    </ListGroup>
                </Panel>
                {footer}
            </div>
        );
    }
};

PaginatorTest.defaultProps = {
    delay: 0
};

PaginatorTest.propTypes = {
    delay: React.PropTypes.number,
    name: React.PropTypes.string.isRequired,
    infinite: React.PropTypes.bool
};

function topPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + topPosition(domElt.offsetParent);
}
