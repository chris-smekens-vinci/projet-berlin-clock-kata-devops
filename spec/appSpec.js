import { Main } from '../app.js';

describe("A suite of tests for the clock function of the main class", function () {
    
let main = new Main();
    
it('second clock function should return A when the number is pair', () => {
        let result = main.secondClock(2);     
        expect(result).toBe('A');
    });
it('second clock function should return X when the number is unpair', () => {
        let result = main.secondClock(3);            
        expect(result).toBe('X');
    });


})