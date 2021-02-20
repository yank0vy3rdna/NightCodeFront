import React from "react";

import GroupList from "./search/GroupList";
import SearchInput from "./search/SearchInput";

const searchData = [
    {
        name: "P3214",
    },
    {
        name: "P3213"
    }
]

function Search() {
    return (
        <div><SearchInput/>
            <GroupList groups={searchData}/></div>
    )
}

export default Search;