import { Main } from '../app.js';

describe("A suite of tests for the clock function of the main class", function () {
    let main = new Main();

    // Tests pour secondClock
    it('second clock function should return A when the number is pair', () => {
        let result = main.secondClock(2);     
        expect(result).toBe('A');
    });
    it('second clock function should return X when the number is unpair', () => {
        let result = main.secondClock(3);            
        expect(result).toBe('X');
    });

    // Tests pour fiveHoursClock
    it('five hours clock function should return XXXX when the hours is 0', () => {
        let result = main.fiveHoursClock(0);     
        expect(result).toBe('XXXX');
    });
    it('five hours clock function should return AXXX when the hours is 5', () => {
        let result = main.fiveHoursClock(5);     
        expect(result).toBe('AXXX');
    });
    it('five hours clock function should return AAXX when the hours is 10', () => {
        let result = main.fiveHoursClock(10);     
        expect(result).toBe('AAXX');
    });
    it('five hours clock function should return AAAX when the hours is 15', () => {
        let result = main.fiveHoursClock(15);     
        expect(result).toBe('AAAX');
    });
    it('five hours clock function should return AAAA when the hours is 20', () => {
        let result = main.fiveHoursClock(20);     
        expect(result).toBe('AAAA');
    });
    // afin de tester la valeur maximale de l'heure (24) 
    it('five hours clock function should return AAAA when the hours is 24', () => {
        let result = main.fiveHoursClock(24);     
        expect(result).toBe('AAAA');
    });

    
});
