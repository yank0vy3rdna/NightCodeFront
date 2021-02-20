import React, {useEffect, useState} from "react";
import Title from "./messages/Title";
import MessageList from "./messages/MessageList";
import SendMessageForm from "./messages/SendMessageForm";
import store from "../../app/store";
useEffect(() => {
    let information = {//todo отправлять номер группы
        "token": store.getState().token
    };
    fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify(information),
    }).then(response => response.json().then(json => {
            if (response.ok) {
                console.log(json)
                //todo стащить сообщения
            }
        }
    ))
    const sock = new SockJS('');//todo
    const client = Stomp.over(sock);
    sock.onopen = function () {
        console.log('open');
        sock.send('test');
    };

    sock.onmessage = function (e) {
        console.log('message', e.data);
        sock.close();
    };

    sock.onclose = function () {
        console.log('close');
    };

    client.subscribe("", function (message) {//todo
        if (message.body) {
            alert("got message with body " + message.body)
        } else {
            alert("got empty message");
            //todo
        }
    });
})
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