import React, {useState} from "react";
import Title from "./messages/Title";
import MessageList from "./messages/MessageList";
import SendMessageForm from "./messages/SendMessageForm";

const messageData = [
    {
        senderId: "саша",
        text: "нет блин маша"
    },
    {
        senderId: "маша",
        text: "нет блин виктор"
    }
]

function MessageWindow() {
    const [messageText, setMessageText] = useState("");
    return (
        <div className={"messageWindow"}>
            <Title/>
            <MessageList messages={messageData}/>
            <SendMessageForm text={messageText} setMessageText={setMessageText}/>
        </div>
    )
}

export default MessageWindow;