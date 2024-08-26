import NavBar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/SideBar/SideBar";

export default function UsersPage(){
    return (
        <>
            <NavBar/>
            <Sidebar/>        
            <h1 className="h-screen flex items-center justify-center text-white">Users Page</h1>
        </>
    )
}