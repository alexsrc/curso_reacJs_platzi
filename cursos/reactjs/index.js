//console.log("hola mundo");
import React from 'react';
import {render} from 'react-dom';
import CategoryList from "./src/playlist/components/categoryList";
import data from "./src/api.json";

const app=document.getElementById("app");
render(
    <CategoryList
        data={data}
    />,app);