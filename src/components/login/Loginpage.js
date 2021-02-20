import React, {useState} from "react";
import LoginForm from "./LoginForm";
import SignChooserButton from "./SignChooserButton";
import RegistrationForm from "./RegistrationForm";
import "./styles/loginPage.css";

function Loginpage() {
    const [button, setButton] = useState("0");
    return (
        <div className={"parent"}>
            <SignChooserButton setButton={setButton}/>
            {button === "0" ? <LoginForm/> : <RegistrationForm/>}
        </div>
    )
}

export default Loginpage;