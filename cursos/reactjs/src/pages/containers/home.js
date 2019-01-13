import React, {Component} from 'react';
import HomeLayout from "../components/homeLayout";
import CategoryList from "../../playlist/components/categoryList";
class Home extends Component{
    render(){
        return(
            <HomeLayout>
                <CategoryList
                    data={this.props.data}
                />
            </HomeLayout>
        );
    }
}

export default Home;