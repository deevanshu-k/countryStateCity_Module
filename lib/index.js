"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateDetailByStateAndCountry = exports.getCountryDetailByCountryCode = exports.getCitiesByStateAndCountry = exports.getStatesByCountry = exports.getAllCountries = void 0;
var countries = require('./data/countries.json');
var states = require('./data/states.json');
var cities = require('./data/cities.json');
var country_states = require('./data/countries+states.json');
function getAllCountries() {
    var data = countries;
    return data;
}
exports.getAllCountries = getAllCountries;
function getStatesByCountry(countryCode) {
    var data;
    for (var _i = 0, country_states_1 = country_states; _i < country_states_1.length; _i++) {
        var d = country_states_1[_i];
        if (d.iso2 == countryCode) {
            data = d.states;
            break;
        }
    }
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
function getCountryDetailByCountryCode(CountryCode) {
    var data;
    for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
        var c = countries_1[_i];
        if (CountryCode == c.iso2) {
            data = c;
            break;
        }
    }
    return data;
}
exports.getCountryDetailByCountryCode = getCountryDetailByCountryCode;
function getStateDetailByStateAndCountry(StateCode, CountryCode) {
    var data;
    for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
        var s = states_1[_i];
        if (s.state_code == StateCode && s.country_code == CountryCode) {
            data = s;
            break;
        }
    }
    return data;
}
exports.getStateDetailByStateAndCountry = getStateDetailByStateAndCountry;
