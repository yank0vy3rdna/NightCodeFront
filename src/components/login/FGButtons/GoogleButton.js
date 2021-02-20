import React from "react";

function GoogleButton() {
    return (
        <form method="LINK" action="/sign-in/auth-via/google">
            <input type="submit" value="Google"/>
        </form>
    )
}

export default GoogleButton;