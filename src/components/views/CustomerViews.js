import { Outlet, Route, Routes } from "react-router-dom"
import { CandyContainer } from "../tickets/CandyContainer"
import { CustomerProducts } from "../tickets/CustomerProductList"
import { Customers } from "../tickets/Customers"
import { FindCandy } from "../tickets/FindCandy"
import { Locations } from "../tickets/Locations"

export const CustomerViews = () => {
    return (<Routes>
        <Route path="/" element={
            <>
                <h1>Kandy Korner</h1>
                <div>Keeping dentists in business since your Grandfather was a wee lad</div>

                <Outlet />
            </>
        }>

            <Route path="locations" element={<Locations />} />
            <Route path="products" element={<CustomerProducts />} />
            <Route path="findCandy" element={<CandyContainer />} />
            
        </Route>
    </Routes>)
}