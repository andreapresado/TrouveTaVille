import { useState } from "react"
import { formatPopulation } from "../../../utils/formatPopulation";



export const Item = ({ nom, codeDepartement, code, population, tata }) => {

    return (
        <div className="repo">
            <h3>
                <strong>{nom} <span className="edited">-{codeDepartement}</span></strong>
                <span className="edit-box">code postal:<span className="edited">{code}</span></span>
                {tata ? <span className="edit-box">population: <span className="edited">{formatPopulation(population)}</span></span> : <span className="edit-box">population: <span className="edited">{population ? population : "N/A"}</span></span>}


            </h3>
        </div>
    )
}