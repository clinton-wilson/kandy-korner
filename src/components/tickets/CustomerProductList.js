import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./products.css"
export const CustomerProducts = ({ searchTermState }) => {

    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)




    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=productType`)
                .then(response => response.json())
                .then((productArray) => {
                    setProductTypes(productArray)
                })
        },
        []
    )



    useEffect(
        () => {
            setFilteredProducts(productTypes)
        },
        [productTypes]
    )




    return <>
        <h2>List of Products</h2>

        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="product">
                            <header>Product: {product.name}</header>
                            <footer>Candy Type: {product.productType.type}</footer>
                            <footer>Price: {product.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}</footer>
                        </section>
                    }
                )
            }

        </article>
    </>


}