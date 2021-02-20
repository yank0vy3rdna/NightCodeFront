import React from "react";

function GroupList(props) {
    return (
        <ul className="group-list">
            {props.groups.map(group => {
                return (
                    <li key={group.id}>
                        <div>
                            {group.name}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default GroupList;