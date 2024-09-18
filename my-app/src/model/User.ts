import {Role} from "@/model/Role";

export default interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}