import React from "react";
import store from "../../app/store";

const logout = e => {
    store.dispatch({type: "change", value: null});
}

function LogoutButton() {

    return (
        <button id="logoutButton" type="button" onClick={logout}>logout</button>
    )
}

export default LogoutButton;