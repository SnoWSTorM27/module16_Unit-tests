const { describe, it, expect } = require('@jest/globals');
import {getPercents} from "./index";


describe("TEST PERCENTS", ()=>{
    it("30 percent from number 200 equal 60",()=>{
        expect(getPercents(30,200)).toBe(60);
    }),
    it("[corner case] 0 percent from number 200 equal 0",()=>{
        expect(getPercents(0,200)).toBe(0);
    }),
    it("[corner case] 100 percent from number 200 equal 200",()=>{
        expect(getPercents(100,200)).toBe(200);
    }),
    it("[corner case] 0 percent from number 0 equal 0",()=>{
        expect(getPercents(0,0)).toBe(0);
    }),
    it("[corner case] 100 percent from number 0 equal 0",()=>{
        expect(getPercents(100,0)).toBe(0);
    })
})