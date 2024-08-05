import React from "react";
import DropDownItemModel from "@/models/DropDownItemModel";

const LogoutItem = (props: DropDownItemModel) => {
    return (
        <li className="dropdown-item">
            {props.icon}
            <a>{props.text}</a>
        </li>
    );
}


export default LogoutItem