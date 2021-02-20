import React from "react";
import {useEffect} from "react/cjs/react.production.min";
import store from "../../../app/store";
function MessageList(props) {
    return (
        <ul className="messageList">
            {props.messages.map(message => {
                return (
                    <li key={message.id}>
                        <div>
                            {message.senderId}
                        </div>
                        <div>
                            {message.text}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default MessageList;