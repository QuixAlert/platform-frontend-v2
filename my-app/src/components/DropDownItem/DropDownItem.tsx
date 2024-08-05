import React from "react";

import DropDownItemModel from "@/models/DropDownItemModel"

import "./styles.css";
import {LogoutOutlined} from "@ant-design/icons";

const DropDownItem = (props: DropDownItemModel) => {
  return (
    <li className="dropdown-item">
        {props.icon}
        <a>{props.text}</a>
    </li>
  );
}


export default DropDownItem