"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCitiesByStateAndCountry = exports.getStatesByCountry = exports.getAllCountries = void 0;
var countries = require('./data/countries.json');
var cities = require('./data/cities.json');
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
function getCitiesByStateAndCountry(countryCode, stateCode) {
    var data = [];
    cities.forEach(function (c) {
        if (c.country_code == countryCode && c.state_code == stateCode) {
            data.push(c);
        }
    });
    return data;
}
exports.getCitiesByStateAndCountry = getCitiesByStateAndCountry;
