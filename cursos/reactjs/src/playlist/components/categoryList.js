import React from 'react';
import Category from "./category";
import PropTypes from 'prop-types';
import './categoryList.css';
function CategoryList(props) {
    const categories= props.data.categories;

    return(
        <div className="CategoryList">
            {
                categories.map((category)=>{
                    return(

                            <Category
                                handleOpenModal={props.handleOpenModal}
                                key={`categoryList-key${category.id}`}
                                data={category.playlist}
                                title={category.title}
                                description={category.description}
                            />
                    );
                })
            }
        </div>
    );
}

CategoryList.propTypes={
    data:PropTypes.object.isRequired,
};
export default CategoryList;