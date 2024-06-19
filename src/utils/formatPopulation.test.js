import { formatPopulation } from "./formatPopulation";

describe('formatPopulation', () => {
    //test1
    test('pour une popultation d\'au moins 1 milion d\'habitants, retourner le nombre divisé par 1 milion, avec une virgule comme marqueur de décimal et le caractère M', () => {
        const population = 1483658;
        const result = formatPopulation(population);
        expect(result).toBe("1.48M");
    })
    //test2
    test('pour une popultation d\'au moins 1000 d\'habitants, retourner le nombre divisé par 1000, avec une virgule comme marqueur de décimal et le caractère K', () => {
        const population = 1453;
        const result = formatPopulation(population);
        expect(result).toBe("1.45K");
    })
    //test3
    test('pour une population inférieure à 1000 habitants, retourner le nombre d\'habitant inchangé', () => {
        const population = 953;
        const result = formatPopulation(population);
        expect(result).toBe("953");
    })

})

