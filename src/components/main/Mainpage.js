import React, {useState} from "react";
import MessageWindow from "./MessageWindow";
import LogoutButton from "./LogoutButton";
import Search from "./Search";
import "./styles/main.css";

function Mainpage() {
    const [selectedGroup, setSelectedGroup] = useState(null);
    return (
        <div>
            <Search/>
            <MessageWindow selectedGroup={selectedGroup}/>
            <LogoutButton/>
        </div>
    )
}

export default Mainpage;