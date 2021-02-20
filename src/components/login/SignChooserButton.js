import "./styles/SignChooserButton.css"

function SignChooserButton(props) {
    return (<div style={{height:"50px"}}>
            <div id={"signInButton"}>
                <label className="container" >Sign In
                    <input type="radio" name={"radiobutton"} checked="checked" onChange={(e) => props.setButton("0")}/>
                    <span className="checkmark"/>
                </label>
            </div>
            <div id={"signUpButton"}>
                <label className="container" >Sign Up
                    <input type="radio" name={"radiobutton"} onChange={(e) => props.setButton("1")}/>
                    <span className="checkmark"/>
                </label>
            </div>
        </div>
    )
}

export default SignChooserButton;
//todo тут какой-то прикольчик с двойным нажатием