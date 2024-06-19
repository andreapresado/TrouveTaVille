export const formatPopulation = (number) => {

    if (number >= 1000 && number < 1000000) {
        // si le nombre est supérieur à 1000
        const formatageMillier = (number / 1000).toFixed(2);
        return formatageMillier + "K";
    } else if (number >= 1000000) {
        //sinon number est supérieur à 1 million
        //retourner le nombre divisé par 1 milion, avec une virgule comme marqueur de décimal et le caractère M
        const formatageMillions = (number / 1000000).toFixed(2);
        return formatageMillions + "M";
    } else if (number === undefined) {
        return "N/A"
    } else {
        const formatageNumber = number.toString()
        return formatageNumber;
    }

}