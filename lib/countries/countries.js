"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = void 0;
var countries = require('../data/countries.json');
function getAllCountries() {
    var data = countries;
    return data;
}
exports.getAllCountries = getAllCountries;
