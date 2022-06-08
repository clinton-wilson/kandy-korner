import { useState } from "react"
import { Candy } from "./Candy"

import { FindCandy } from "./FindCandy"
import "./products.css"

export const CandyContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return<>
        <FindCandy setterFunction = {setSearchTerms} /> 
        <Candy searchTermState = {searchTerms} />
    </>
}