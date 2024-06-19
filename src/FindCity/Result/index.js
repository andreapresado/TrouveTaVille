import { formatPopulation } from "../../utils/formatPopulation";

export const Result = ({ getCities, setTata }) => {

    const handleClick = () => {
        setTata((previousTataValue) => {
            return !previousTataValue
        });
    };

    return (
        <div className='formatageBox'>
            <label className="result"> resultat </label>
            <button onClick={handleClick} className="resultButton">changer le format</button>
        </div>
    )
}