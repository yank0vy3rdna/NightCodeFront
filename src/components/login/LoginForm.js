import React, {useState} from "react";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import store from "../../app/store";

function LoginForm() {
    const signIn = e => {
        let information = {
            "email": email, "password": password
        };
        fetch("/sign-in", {
            method: "POST",
            body: JSON.stringify(information),
        }).then(response => response.json().then(json => {
                if (response.ok) {
                    console.log(json)
                    store.dispatch({type: "change", value: json.token});//todo "gwt-"??
                }
            }
        ))
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (<div className="login_form">
            <form style={{
                fontSize: "170%",
                fontWeight: "bold"
            }}>
                <div className="log-field">
                    <label>E-mail </label>
                    <InputText type="text" id="username" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>Password </label>
                    <InputText type="password" id="password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button className="button" type="button" onClick={signIn}>Log In</Button>
            </form>
        </div>
    )
}

export default LoginForm;