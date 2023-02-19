const {getAllCountries} = require ('../src/index');

describe("Test for all countries related Fnx", () => {
    describe("getAllCountries()", () => {
        it("should return an array of countries", () => {
            let countries = getAllCountries();
            expect(typeof countries).toBe('object');
            expect(typeof countries[0]).toBe('object');

    })
});
});