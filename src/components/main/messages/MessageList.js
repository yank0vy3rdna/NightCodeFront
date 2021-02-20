import React from "react";

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