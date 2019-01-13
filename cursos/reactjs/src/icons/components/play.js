import React from 'react';
import Icon from "../../icons/components/icon";
import PropTypes from 'prop-types'

function Play(props) {

    return(
        <Icon
            {...props}
        >
            <svg version="1.1" >
                <title>play3</title>
                <path d="M6 4l20 12-20 12z"></path>
            </svg>
        </Icon>

    )
}

Play.propTypes={
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
export default Play;