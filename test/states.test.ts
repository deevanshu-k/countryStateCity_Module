const { getStatesByCountry,getStateDetailByStateAndCountry } = require('../src/index');
const statesArr = require('../src/data/countries+states.json');
const statesData = require('../src/data/states.json');

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
    describe("getStateDetailByStateCode()", () => {
        it("should return state detail by stateCode", () => {
            let detail = getStateDetailByStateAndCountry('MP','IN');
            let expectedDetail;
            for(let s of statesData){
                if(s.state_code == 'MP' && s.country_code == 'IN'){
                    expectedDetail = s;
                }
            }
            expect(detail).toEqual(expectedDetail);
        })
    });
});