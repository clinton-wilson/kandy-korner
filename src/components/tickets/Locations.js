import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./locations.css"

export const Locations = () => {
    const [locations, setLocations] = useState([])
    // const [filteredLocations, setFilteredLocations] = useState([])
    // const navigate = useNavigate() 


    // const localKandyUser = localStorage.getItem("kandy_user")
    // const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch (`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },
        []
    )

    return <>
    <h2>List of Locations</h2>

        <article className="locations">
            {
                locations.map(
                    (location) => {
                        return <section className="location">
                            <header>Location: {location.name}</header>
                            <footer>Size: {location.sqFootage} sq. ft</footer>
                        </section>
                    }
                )
            }

        </article>
</>
}