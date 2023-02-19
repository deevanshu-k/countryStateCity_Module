import { country } from "../interfaces/country.interface";
const countries =  require('../data/countries.json');

export function getAllCountries() : country[]{
    let data : country[] = countries;
    return data;
}