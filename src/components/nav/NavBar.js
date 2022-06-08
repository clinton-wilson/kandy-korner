import { Link, useNavigate } from "react-router-dom"
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"
import "./NavBar.css"

export const NavBar = () => {
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    if (kandyUserObject.staff) {
        return <EmployeeNav />
    }
    else {
        return <CustomerNav />
    }
}

