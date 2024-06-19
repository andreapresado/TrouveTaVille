function SearchForm({ getCities }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        getCities(event.target.elements[0].value);
    };


    return (
        <>
          
            <form role="search" id="searchForm" action="" method="POST" onSubmit={handleSubmit} className="searchform" >
                <legend > Recherche par nom de commune</legend>
                <label className="labelInput">
                    <span className="edited-keyword">Mots clés/</span> <span className="edited-keyword">La recherche doit faire plus de 2 caractères</span>
                </label>
                <div className="divsearch">
                    <input type="text" id="inputSearch" className="searchformInput" />
                    <button className="searchButton" type="submit">Lancer la recherche</button>
                </div>
            </form>
        </>
    );
}
export default SearchForm;