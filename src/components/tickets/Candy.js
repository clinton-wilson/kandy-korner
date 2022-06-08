import { useEffect, useState } from "react"

export const Candy = ({searchTermState}) => {
    
    const [products, setProducts] = useState([])
    const [foundCandy, setFoundCandy] = useState([])

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
            if (searchTermState === "")
            {
                setFoundCandy([])
            }
            else
            {
                const searchedProducts = products.filter(product => {
                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFoundCandy(searchedProducts)
        }
        },
        [searchTermState]
    )






    return <>
    <h2>Kandy Search Results</h2>
    <article className="candyFilter">
        {
            foundCandy.map(
                (product) => {
                    return <section className="product" key={product.id}>
                            <header>Product: {product.name}</header>
                            <footer>Price: {product.price.toLocaleString('en-us', {style: 'currency', currency: 'USD'})}</footer>
                        </section>
                }
            )   
        }
    </article>
    </>
}