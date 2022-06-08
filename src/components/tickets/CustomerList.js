import { useEffect, useState } from "react"
import { Customers } from "./Customers"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
                .then(res => res.json())
                .then((customerData) => {
                    setCustomers(customerData)
                })
        },
        []
    )
    return <article className="customers">
        {
            customers.map(customer => <Customers key={`customer==${customer.userId}`}
            id={customer.userId}
            fullName={customer?.user?.fullName}
            email={customer?.user?.email}/>)
        }
        
    </article>
}