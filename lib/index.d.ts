import { Country } from "./interfaces/country.interface";
import { smallState } from "./interfaces/smallState.interface";
export declare function getAllCountries(): Country[];
export declare function getStatesByCountry(countryCode: string): smallState[];
