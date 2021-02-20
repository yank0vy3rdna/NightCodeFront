import React, {useState} from "react";
import {InputText} from "primereact/inputtext";

function SearchInput() {
    const [searchMessage, setSearchMessage] = useState("");
    return (
        <InputText type="text" id="username" value={searchMessage}
                   onChange={(e) => setSearchMessage(e.target.value)}/>
    )
}

export default SearchInput;
//todo 