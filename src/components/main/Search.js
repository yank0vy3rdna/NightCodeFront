import React, {useEffect, useState} from "react";

import GroupList from "./search/GroupList";
import SearchInput from "./search/SearchInput";
import store from "../../app/store";
import "stompjs";


function Search() {
    const [searchData, setSearchData] = useState(null);
    useEffect(() => {
        let information = {
            "token": store.getState().token
        };
        fetch("api/group", {
            method: "GET",
            body: JSON.stringify(information),
        }).then(response => response.json().then(json => {
                if (response.ok) {
                    console.log(json)
                    setSearchData(json.groups);
                }
            }
        ))
    })
    return (
        <div><SearchInput/>
            <GroupList groups={searchData}/></div>
    )
}

export default Search;