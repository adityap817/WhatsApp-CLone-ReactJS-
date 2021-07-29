import React, { useEffect , useState} from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase'

function SidebarChat({id , name, addNewChat}) {
    const [seed , setSeed] = useState("");

    useEffect(() => {
      setSeed(Math.floor(Math.random()*5000));
        
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter the Name for chat");

        if(roomName){
            // do some clever database stuff
            db.collection("rooms").add({
                name: roomName,
            })
        }
    };

    return !addNewChat ?(
       <div className="sidebarChat">
           <Avatar src={"https://avatars.dicebear.com/api/human/${seeaad}.svg"} />
           <div className="sidebarChat__info">
               <h2>{name}</h2>
               <p>Last Message....</p>
           </div>
       </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat