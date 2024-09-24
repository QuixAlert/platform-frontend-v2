import {Role} from "@/model/Role";
import GovernmentDetails from "./GovernmentDetails";

export default interface BusinessUser {
  id?: string;
  name?: string;
  email?: string;
  role?: Role;
  active?: boolean
  photo?: string
  governmentDetails?: GovernmentDetails
}