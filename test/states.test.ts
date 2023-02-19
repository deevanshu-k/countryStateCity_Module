const { getStatesByCountry } = require('../src/index');
const statesArr = require('../src/data/countries+states.json');

describe("Test for all State related Fnx", () => {
    describe("getStatesByCountry()", () => {
        it("should return an array of states", () => {
            let states = getStatesByCountry('IN');
            let data;
            statesArr.forEach((s) => {
                if(s.iso2 == 'IN'){
                    data = s;
                    return false;
                }
            });
            expect(typeof states).toBe('object');
            expect(typeof states[0]).toBe('object');
            expect(states).toEqual(data.states);
        })
    });
});