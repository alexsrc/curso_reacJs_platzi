import React, {Component} from 'react';
import RegularError from "../components/regularError";

class HandleError extends Component{
    state={
        handleError:false,
        error:"",
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            handleError:true,
            error:errorInfo,
        })
    }


    render(){
        if(this.state.handleError) {
            return (
                <RegularError
                error={this.state.error}
                />
            );
        }
        return this.props.children;
    }
}

export default HandleError;