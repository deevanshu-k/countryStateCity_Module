import { City } from "./interfaces/city.interface";
import { Country } from "./interfaces/country.interface";
import { smallState } from "./interfaces/smallState.interface";
import { State } from "./interfaces/state.interface";
const countries =  require('./data/countries.json');
const states =  require('./data/states.json');
const cities =  require('./data/cities.json');
const country_states =  require('./data/countries+states.json');

export function getAllCountries() : Country[]{
    let data : Country[] = countries;
    return data;
}

export function getStatesByCountry(countryCode : string) : smallState[] {
    let data:smallState[];
    for(let d of country_states){
        if(d.iso2 == countryCode){
            data = d.states;
            break;
        }
    }
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

export function getCountryDetailByCountryCode(CountryCode:string):Country {
    let data:Country;
    for(let c of countries){
        if(CountryCode == c.iso2){
            data = c;
            break;
        }
    }
    return data;
}

export function getStateDetailByStateAndCountry(StateCode:string,CountryCode:string):State{
    let data:State;
    for(let s of states){
        if(s.state_code == StateCode && s.country_code == CountryCode){
            data = s;
            break;
        }
    }
    return data;
}
