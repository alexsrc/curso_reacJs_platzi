import React from 'react';
import Icon from "../../icons/components/icon";
import PropTypes from 'prop-types'

function FullScreen(props) {

    return(
        <Icon
            {...props}
        >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>enlarge</title>
                <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
                <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
                <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
                <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
            </svg>
        </Icon>

    )
}

FullScreen.propTypes={
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
export default FullScreen;