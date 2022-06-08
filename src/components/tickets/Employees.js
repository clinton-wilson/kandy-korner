import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./employees.css"

export const Employees = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=location`)
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    return <>
        <h2>Employees</h2>
        <article className="employees">
            {
                employees.map(
                    (employee) => {
                        return <section className="employee" key={employee.id}>
                            <header className="employee__header">{employee.fullName}</header>
                            <footer className="employee__footer">Location: {employee?.location?.name}</footer>
                            <footer className="employee__footer">Start date: {employee.startDate}</footer>
                            <footer className="employee__footer">Hourly rate: {employee.payRate.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}</footer>
                        </section>
                    }
                )
            }
        </article>
        <button className="myButton" onClick={() => navigate("/employee/hiringForm")}>Add New Employee</button>
    </>
}