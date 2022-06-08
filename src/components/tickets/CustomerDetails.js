import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./customer.css"

export const CustomerDetails = () => {
    const { customerId } = useParams()
    const [customer, setCustomer] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
                .then(res => res.json())
                .then((customerData) => {
                    const singleCustomer = customerData[0]
                    setCustomer(singleCustomer)
                })
        },
        [customerId]
    )
    return <section className="customer">
        <header className="customer__header">Name: {customer?.user?.fullName}</header>
        <footer className="customer__footer">Email: {customer?.user?.email}</footer>
        <footer className="customer__footer">Loyalty number:{customer.loyaltyNum}</footer>
    </section>
}