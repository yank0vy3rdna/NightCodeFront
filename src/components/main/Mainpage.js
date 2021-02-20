import React from "react";
import MessageList from "./messages/MessageList";
import MessageWindow from "./MessageWindow";
import LogoutButton from "./LogoutButton";



function Mainpage() {
    return (
        <div>
            <MessageWindow/>
            <LogoutButton/>
        </div>
    )
}

export default Mainpage;