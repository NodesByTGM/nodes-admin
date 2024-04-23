import { Outlet } from "react-router-dom"

function AdminAuth() {
    return (
        <div className=" min-h-[100vh] ">
            <div className="">
                <Outlet />
            </div>
          
        </div>
    )
}

export default AdminAuth
