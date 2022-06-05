import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Products } from "./Products"

export const ProductForm = () => {
    const [productTypes, setProductTypes] = useState([])
    const [selected, setSelected] = useState([productTypes])
    const [product, update] = useState({
        name: "",
        productTypeId: "",
        price: ""
    })

    const navigate = useNavigate()



    useEffect(
        () => {
            fetch(`http://localhost:8088/productTypes`)
                .then(response => response.json())
                .then((productArray) => {
                    setProductTypes(productArray)
                })
        },
        []
    )



    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const productToSendToAPI = {
            name: product.name,
            productTypeId: product.productTypeId,
            price: product.price
        }

        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/products")
            })
    }
    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Product:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Candy name"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" min="0.01" step="0.01" max="2500"
                        className="form-control"
                        placeholder="Candy price"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.price = parseFloat(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="type">Type:  </label>
                    <select value={product.productTypeId} onChange={
                        (evt) => {
                            const copy = { ...product }
                            copy.productTypeId = parseInt(evt.target.value)
                            update(copy)
                        }
                    }><option>Choose Candy Type</option>
                        {productTypes.map(product => (
                            <option value={product.id}>
                                {product.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>



            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}