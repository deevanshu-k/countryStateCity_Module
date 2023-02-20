import { City } from "./interfaces/city.interface";
import { Country } from "./interfaces/country.interface";
import { smallState } from "./interfaces/smallState.interface";
export declare function getAllCountries(): Country[];
export declare function getStatesByCountry(countryCode: string): smallState[];
export declare function getCitiesByStateAndCountry(countryCode: string, stateCode: string): City[];
