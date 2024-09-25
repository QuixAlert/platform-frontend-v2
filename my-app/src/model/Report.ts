import StatusReport from "@/model/StatusReport";
import UserFirebase from "@/model/UserFirebase";

export default interface Report {
  id: string,
  id_report_status: string,
  title: string,
  location: string
  description: string,
  date: string,
  photo: string,
  id_user: string,
  possible_solution: string,
  status_report: StatusReport,
  user: UserFirebase,
}