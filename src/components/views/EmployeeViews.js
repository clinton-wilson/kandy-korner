import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerDetails } from "../tickets/CustomerDetails"
import { CustomerList } from "../tickets/CustomerList"
import { Customers } from "../tickets/Customers"
import { EmployeeProducts } from "../tickets/EmployeeProductList"
import { Employees } from "../tickets/Employees"
import { HiringForm } from "../tickets/HiringForm"
import { Locations } from "../tickets/Locations"
import { ProductForm } from "../tickets/ProductForm"


export const EmployeeViews = () => {
    return (<Routes>
        <Route path="/" element={
            <>
                <h1>Kandy Korner</h1>
                <div>Keeping dentists in business since your Grandfather was a wee lad</div>

                <Outlet />
            </>
        }>

            <Route path="locations" element={<Locations />} />
            <Route path="products" element={<EmployeeProducts />} />
            <Route path="product/create" element={<ProductForm />} />
            <Route path="employees" element={<Employees />} />
            <Route path="employee/hiringForm" element={<HiringForm />} />
            <Route path="customers" element={<CustomerList />} />
            <Route path="customers/:customerId" element={<CustomerDetails />} />

        </Route>
    </Routes>)
}
/* <Route path="customers/:customerId" element={< />} /> */