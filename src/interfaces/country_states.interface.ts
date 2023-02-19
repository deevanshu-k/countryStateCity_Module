import { smallState } from "./smallState.interface";

export interface CountryStates {
    id: number,
    name: string,
    iso2: string,
    states: smallState[]
}

