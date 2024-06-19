import { Item } from "./item";
import { Result } from "../Result";
import { useState } from "react";


export const List = ({ cities }) => {
    const [tata, setTata] = useState(false);
    const sortedCities = [...cities].sort((a, b) => a.nom.localeCompare(b.nom));  
    
    return (
        <>
            <div id="repos">
                <Result setTata={setTata} />
                {sortedCities.map((city, index) => {
                    console.log(city.population, city.nom);
                    return <Item
                        key={index}
                        nom={city.nom}
                        codeDepartement={city.codeDepartement}
                        code={city.code}
                        population={city.population}
                        tata={tata}
                    />
                })}
            </div>
        </>
    )
}