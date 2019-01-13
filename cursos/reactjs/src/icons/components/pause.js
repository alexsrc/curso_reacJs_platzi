import React from 'react';
import Icon from "../../icons/components/icon";
import PropTypes from 'prop-types'

function Pause(props) {

    return(
        <Icon
            {...props}
        >
            <svg version="1.1">
                <title>pause2</title>
                <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
            </svg>
        </Icon>

    )
}

Pause.propTypes={
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
export default Pause;