import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const HiringForm = () => {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState([])
    const [hiredEmployee, updateEmployees] = useState({
        fullName: "",
        email: "",
        locationId: 0,
        startDate: "",
        payRate: "",
        isStaff: true
    })

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


    const saveNewEmployee = (event) => {
        event.preventDefault()

        const userToAPI = {
            fullName: hiredEmployee.fullName,
            email: hiredEmployee.email,
            isStaff: true
        }

        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToAPI)
        })
            .then(res => res.json())
            .then((userObject) => {
                const employeeToAPI = {
                    fullName: hiredEmployee.fullName,
                    email: hiredEmployee.email,
                    isStaff: true,
                    startDate: hiredEmployee.startDate,
                    payRate: hiredEmployee.payRate,
                    locationId: hiredEmployee.location,
                    userId: userObject.id
                }
                return fetch(`http://localhost:8088/employees`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(employeeToAPI)
                })
                .then(res => res.json())
                .then(() => {
                    navigate("/employees")
            })
            
            })
    }

    return (
        <form className="hiringForm">
            <h2>New Hire Form</h2>
            <fieldset>
                <div className="hiringFormGroup">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Name"
                        value={hiredEmployee.fullName}
                        onChange={
                            (evt) => {
                                const copy = { ...hiredEmployee }
                                copy.fullName = evt.target.value
                                updateEmployees(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="hiringFormGroup">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Employee email"
                        value={hiredEmployee.email}
                        onChange={
                            (evt) => {
                                const copy = { ...hiredEmployee }
                                copy.email = evt.target.value
                                updateEmployees(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="hiringFormGroup">
                    <label htmlFor="location">Location:  </label>
                    <select value={hiredEmployee?.location?.id} onChange={
                        (evt) => {
                            const copy = { ...hiredEmployee }
                            copy.location = parseInt(evt.target.value)
                            updateEmployees(copy)
                        }
                    }><option>Choose Location</option>
                        {employees.map(employee => (
                            <option value={employee?.location?.id}>
                                {employee?.location?.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="hiringFormGroup">
                    <label htmlFor="startDate">Start date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={hiredEmployee.startDate}
                        onChange={
                            (evt) => {
                                const copy = { ...hiredEmployee }
                                copy.startDate = evt.target.value
                                updateEmployees(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="hiringFormGroup">
                    <label htmlFor="payRate">Hourly rate:</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter pay rate"
                        value={hiredEmployee.payRate}
                        onChange={
                            (evt) => {
                                const copy = { ...hiredEmployee }
                                copy.payRate = parseInt(evt.target.value)
                                updateEmployees(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => saveNewEmployee(clickEvent)}
                className="myButton">
                Add New Hire
            </button>
        </form>
    )

} 