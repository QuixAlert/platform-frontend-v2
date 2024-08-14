import {ReactElement} from "react";

class DropDownItemModel {
  text!: string;
  icon!: ReactElement;
  onClick?: () => void;
}

export default DropDownItemModel