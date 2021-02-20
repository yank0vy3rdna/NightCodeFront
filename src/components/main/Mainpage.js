import React from "react";
import MessageWindow from "./MessageWindow";
import LogoutButton from "./LogoutButton";
import Search from "./Search";
import "./styles/main.css";

function Mainpage() {
    return (
        <div>
            <Search/>
            <MessageWindow/>
            <LogoutButton/>
        </div>
    )
}

export default Mainpage;