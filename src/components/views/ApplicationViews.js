import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../tickets/Locations"
import { ProductForm } from "../tickets/ProductForm"
import { Products } from "../tickets/Products"
export const ApplicationViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
			<h1>Kandy Korner</h1>
			<div>Keeping dentists in business since your Grandfather was a wee lad</div>

			<Outlet />
			</>
		}>

			<Route path="locations" element={ <Locations /> } />
			<Route path="products" element={ <Products /> } />
			<Route path="product/create" element={ <ProductForm /> } />
		</Route>
	</Routes>

	)
}

