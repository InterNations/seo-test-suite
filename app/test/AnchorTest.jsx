import React from 'react';

const AnchorTest = ({ url }) => (
    <a href="javascript:void(0);" onClick={() => window.location.href = url}>Go to {url}</a>
);

AnchorTest.propTypes = {
    url: React.PropTypes.string.isRequired
};

export default AnchorTest;
