const { getCitiesByStateAndCountry } = require('../src/index');
const cityArr = require('../src/data/cities.json');

describe("Test for all City related Fnx", () => {
    describe("getCitiesByStateAndCountry()", () => {
        it("should return an array of Cities", () => {
            let city = getCitiesByStateAndCountry('IN','MP');
            let data : any = [];
            cityArr.forEach((c:any) => {
                if(c.country_code == 'IN' && c.state_code == 'MP'){
                    data.push(c);
                }
            });
            expect(typeof city).toBe('object');
            expect(typeof city[0]).toBe('object');
            expect(city).toEqual(data);
        })
    });
});