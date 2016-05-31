import React from 'react';

const ButtonTest = ({ url }) => (
    <button className="btn" onClick={() => window.location.href = url}>Go to {url}</button>
);

ButtonTest.propTypes = {
    url: React.PropTypes.string.isRequired
};

export default ButtonTest;
