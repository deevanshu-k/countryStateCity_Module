"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatesByCountry = exports.getAllCountries = void 0;
var countries = require('./data/countries.json');
var country_states = require('./data/countries+states.json');
function getAllCountries() {
    var data = countries;
    return data;
}
exports.getAllCountries = getAllCountries;
function getStatesByCountry(countryCode) {
    var data;
    country_states.forEach(function (cs) {
        if (cs.iso2 == countryCode) {
            data = cs.states;
            return false;
        }
    });
    return data;
}
exports.getStatesByCountry = getStatesByCountry;
