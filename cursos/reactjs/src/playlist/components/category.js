import React from 'react';
import Playlist from "./playlist";


function Category(props) {
    return(
        <div>
            <p>{props.description}</p>
            <h2>{props.title}</h2>
            <Playlist
                {...props}
            />
        </div>
    );
}

export default Category;