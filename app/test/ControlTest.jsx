import React from 'react';

const Control = ({ url, children }) => (
    <a href={url}>{children}</a>
);

Control.propTypes = {
    url: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
};

export default Control;
