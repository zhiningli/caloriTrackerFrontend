import React from 'react';
import PropTypes from 'prop-types';
import { BlockContainer } from './DisplayBlock.style';

function DisplayBlock({ label, value }) {
    return (
        <BlockContainer>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </BlockContainer>
    );
}

DisplayBlock.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default DisplayBlock;
