import React, {Component} from 'react';
import HomeLayout from "../components/homeLayout";
import CategoryList from "../../playlist/components/categoryList";
import ModalContainer from "../../widgets/components/modalContainer";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handleError";
import VideoPlayer from "../../player/containers/videoPlayer";
class Home extends Component{
    state={
        modalVisible: false,
    };

    handleCloseModal=(event)=>{
        this.setState({
            modalVisible:false,
        })
    };

    render(){


        return(
            <HandleError>

                <HomeLayout>
                    <VideoPlayer/>
                    <CategoryList
                        data={this.props.data}
                        handleOpenModal={this.handleOpenModal}
                    />
                    {this.state.modalVisible &&
                    <ModalContainer>
                        <Modal
                            handleClick={this.handleCloseModal}
                        >
                            <h1>Esto es un portal</h1>
                        </Modal>
                    </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }



    handleOpenModal=(event)=>{
        this.setState({
            modalVisible:true,
        })
    };
}

export default Home;