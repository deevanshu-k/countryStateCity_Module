import { City } from "./interfaces/city.interface";
import { Country } from "./interfaces/country.interface";
import { smallState } from "./interfaces/smallState.interface";
import { State } from "./interfaces/state.interface";
export declare function getAllCountries(): Country[];
export declare function getStatesByCountry(countryCode: string): smallState[];
export declare function getCitiesByStateAndCountry(countryCode: string, stateCode: string): City[];
export declare function getCountryDetailByCountryCode(CountryCode: string): Country;
export declare function getStateDetailByStateAndCountry(StateCode: string, CountryCode: string): State;
