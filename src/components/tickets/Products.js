import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./products.css"
export const Products = () => {
    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [onlyTopPriced, setOnlyTopPriced] = useState(false)
    const navigate = useNavigate()
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        []
    )

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

    useEffect(
        () => {
            if (onlyTopPriced) {
                const topPricedArray = filteredProducts.filter(product => product.price > 2)
                setFilteredProducts(topPricedArray)
            }
            else {
                setFilteredProducts(productTypes)
            }
        },
        [onlyTopPriced]
    )


    return <>
    <h2>List of Products</h2>
        {
            kandyUserObject.staff
            ? <>
                <button className="myButton" onClick={ () => { setOnlyTopPriced(true)}}>Show Top Priced</button>
                <button className="myButton" onClick={ () => { setOnlyTopPriced(false)}}>Show All Products</button>
                <button className="myButton" onClick={() => navigate("/product/create")}>Add New Candy</button>
            </>
            : <></>
        }
        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="product">
                            <header>Product: {product.name}</header>
                            <footer>Candy Type: {product.productType.type}</footer>
                            <footer>Price: {product.price.toLocaleString('en-us', {style: 'currency', currency: 'USD'})}</footer>
                        </section>
                    }
                )
            }

        </article>
</>


}