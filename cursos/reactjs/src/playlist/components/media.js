import React, {PureComponent} from 'react';
import './media.css'
import PropTypes from 'prop-types';
class Media extends PureComponent{

    constructor(props){
        super(props);
    }

    styles={
        container:{
            color:"#44546b",
            cursor:"pointer",
            width:260,
            border:"1px solid red"
        }
    };

    state={
        author:"alexader minuscula"
    };


    render() {

        const {
            title,
            author,
            cover
        }=this.props;



        return (
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={cover}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>
        );
    }
}

Media.propTypes={
    cover:PropTypes.string,
    title:PropTypes.string.isRequired,
    author:PropTypes.string,
    type:PropTypes.oneOf(['video','audio']),
};

export default Media;