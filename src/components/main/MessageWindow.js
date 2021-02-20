import React, {useEffect, useState} from "react";
import Title from "./messages/Title";
import MessageList from "./messages/MessageList";
import SendMessageForm from "./messages/SendMessageForm";
import store from "../../app/store";
import * as SockJS from 'sockjs-client';
import StompClient from "react-stomp-client";

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

function MessageWindow(props) {
    useEffect(() => {
        let information = {
            "token": store.getState().token,
            "groupId": props.selectedGroup
        };
        fetch("api/messages", {
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
        const client = StompClient.over(sock);
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