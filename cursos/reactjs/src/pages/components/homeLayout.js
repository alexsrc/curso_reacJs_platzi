import React from 'react';
import Related from "./related";
import './homeLayout.css';

function HomeLayout(props) {
    return(
        <section className="HomeLayout">
            <Related/>
            {props.children}
        </section>
    );
}

export default HomeLayout;