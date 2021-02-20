import React, {useState} from "react";
import {InputText} from "primereact/inputtext";

function SendMessageForm(props) {
    return (
        <form className="sendMessageForm">
            <InputText value={props.text} onChange={(e) => props.setMessageText(e.value)}/>
        </form>
    )
}

export default SendMessageForm;