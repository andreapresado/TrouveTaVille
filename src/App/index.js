import { useState, useEffect } from "react";
import { List } from "../FindCity/List";
import SearchForm from "../FindCity/Search";
import '../assets/styles/style.css'
import { formatPopulation } from "../utils/formatPopulation.js";

export const App = () => {
    
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);


    async function getCities(searchInput) {
        try {
            setLoading(true);
            const response = await fetch(`https://geo.api.gouv.fr/communes?nom=${searchInput}`);
            const data = await response.json();

            setCities(data);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
            alert('la récupération de vos données s\'est mal passé ');
        }

    }

    
    return (
        <>
            <div className="box-titre">
                <h1 >Trouve ta ville</h1>
            </div>

            <SearchForm getCities={getCities} />
            {!loading ? <List cities={cities} /> : <span>...loading</span>}
        </>
    )

}