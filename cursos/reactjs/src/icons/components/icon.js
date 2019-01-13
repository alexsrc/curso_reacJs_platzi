import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
    const{color, width, height} = props;
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color}
            viewBox="0 0 32 32"
        >
            {props.children}
        </svg>
    );
}

Icon.propTypes={
    width:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    height:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    color:PropTypes.string
};
export default Icon;