import React from 'react';
import Media from "./media";
import './playlist.css';
import Play from "../../icons/components/play";
import Pause from "../../icons/components/pause";
import Volumen from "../../icons/components/volumen";
import FullScreen from "../../icons/components/fullScreen";



function Playlist(props){
    //render(){
        const playlist = props.data;
        return(
            <div className="Playlist">
                {/*<Play*/}
                    {/*width={100}*/}
                    {/*height={100}*/}
                    {/*color="red"*/}
                {/*/>*/}
                {/*<Pause*/}
                    {/*width={100}*/}
                    {/*height={100}*/}
                    {/*color="red"*/}
                {/*/>*/}
                {/*<Volumen*/}
                    {/*width={100}*/}
                    {/*height={100}*/}
                    {/*color="red"*/}
                {/*/>*/}
                {/*<FullScreen*/}
                    {/*width={100}*/}
                    {/*height={100}*/}
                    {/*color="red"*/}
                {/*/>*/}
                {
                    playlist.map((item)=>{
                        return (
                            <Media

                                handleClick={props.handleOpenModal}
                                key={item.id}
                                {...item}
                            />
                        )
                    })
                }

            </div>
        );
    //}
}

export default Playlist;