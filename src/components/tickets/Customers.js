import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./customer.css"
export const Customers = ({id, fullName, email}) => {
    return <section className="customer">
        <div>
            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
        <div>
            Email: {email}
        </div>
    </section>
}