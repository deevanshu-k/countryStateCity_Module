const { getAllCountries,getCountryDetailByCountryCode } = require('../src/index');
const countriesArr = require('../src/data/countries.json');

describe("Test for all countries related Fnx", () => {
    describe("getAllCountries()", () => {
        it("should return an array of countries", () => {
            let countries = getAllCountries();
            expect(typeof countries).toBe('object');
            expect(typeof countries[0]).toBe('object');
            expect(countries).toEqual(countriesArr);
        })
    });

    describe("getCountryDetailByCountryCode()",() => {
        it("should return correct country detail",() => {
            let detail = getCountryDetailByCountryCode('IN');
            let expectedDetail;
            countriesArr.forEach((c) => {
                if(c.iso2 == 'IN'){
                    expectedDetail = c;
                }
            }) ;
            expect(detail).toEqual(expectedDetail);
        })
    })
});