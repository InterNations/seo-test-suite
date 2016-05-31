import React from 'react';

const DropdownTest = ({ options }) => (
    <div>
        <select onChange={(e) => document.location.href=e.target.value}>
            <option value="">Pick URL to redirect to</option>
            {options.map((option) =>
                <option value={option.url} key={option.url}>{option.text}</option>
            )}
        </select>
    </div>
);

DropdownTest.propTypes = {
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    })).isRequired
};

export default DropdownTest;
