import { City } from "./interfaces/city.interface";
import { Country } from "./interfaces/country.interface";
import { CountryStates } from "./interfaces/country_states.interface";
import { smallState } from "./interfaces/smallState.interface";
const countries =  require('./data/countries.json');
const cities =  require('./data/cities.json');
const country_states =  require('./data/countries+states.json');

export function getAllCountries() : Country[]{
    let data : Country[] = countries;
    return data;
}

export function getStatesByCountry(countryCode : string) : smallState[] {
    let data:smallState[];
    country_states.forEach((cs:CountryStates) => {
        if(cs.iso2 == countryCode){
            data = cs.states;
            return false;
        }
    });
    return data;
}

export function getCitiesByStateAndCountry(countryCode:string,stateCode:string) : City[] {
    let data:City[] = [];
    cities.forEach((c:City) => {
        if(c.country_code == countryCode && c.state_code == stateCode){
            data.push(c);
        }
    });
    return data;
}
