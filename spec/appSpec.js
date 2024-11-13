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

    // Tests pour oneHourClock
    it('one hour clock function should return XXXX when the hours is 0', () => {
        let result = main.oneHourClock(0);     
        expect(result).toBe('XXXX');
    });
    it('one hour clock function should return AXXX when the hours is 1', () => {
        let result = main.oneHourClock(1);     
        expect(result).toBe('AXXX');
    });
    it('one hour clock function should return AAXX when the hours is 2', () => {
        let result = main.oneHourClock(2);     
        expect(result).toBe('AAXX');
    });
    it('one hour clock function should return AAAX when the hours is 3', () => {
        let result = main.oneHourClock(3);     
        expect(result).toBe('AAAX');
    });
    it('one hour clock function should return AAAA when the hours is 4', () => {
        let result = main.oneHourClock(4);     
        expect(result).toBe('AAAA');
    });
    
    // tests pour fiveMinutesClock

    it('five minutes clock function should return XXXXXXXXXXX when the minutes is 0', () => {
        let result = main.fiveMinutesClock(0);     
        expect(result).toBe('XXXXXXXXXXX');
    });

    it('five minutes clock function should return AXXXXXXXXXX when the minutes is 5', () => {
        let result = main.fiveMinutesClock(5);     
        expect(result).toBe('AXXXXXXXXXX');
    });

    it('five minutes clock function should return AAXXXXXXXXX when the minutes is 10', () => {
        let result = main.fiveMinutesClock(10);     
        expect(result).toBe('AAXXXXXXXXX');
    });

    it('five minutes clock function should return AAAXXXXXXXX when the minutes is 15', () => {
        let result = main.fiveMinutesClock(15);     
        expect(result).toBe('AAAXXXXXXXX');
    });

    it('five minutes clock function should return AAAAXXXXXXX when the minutes is 20', () => {
        let result = main.fiveMinutesClock(20);     
        expect(result).toBe('AAAAXXXXXXX');
    });

    it('five minutes clock function should return AAAAAXXXXXX when the minutes is 25', () => {
        let result = main.fiveMinutesClock(25);     
        expect(result).toBe('AAAAAXXXXXX');
    });

    it('five minutes clock function should return AAAAAAXXXXX when the minutes is 30', () => {
        let result = main.fiveMinutesClock(30);     
        expect(result).toBe('AAAAAAXXXXX');
    });

    it('five minutes clock function should return AAAAAAAXXXX when the minutes is 35', () => {
        let result = main.fiveMinutesClock(35);     
        expect(result).toBe('AAAAAAAXXXX');
    });

    it('five minutes clock function should return AAAAAAAAXXX when the minutes is 40', () => {
        let result = main.fiveMinutesClock(40);     
        expect(result).toBe('AAAAAAAAXXX');
    });

    it('five minutes clock function should return AAAAAAAAAXX when the minutes is 45', () => {
        let result = main.fiveMinutesClock(45);     
        expect(result).toBe('AAAAAAAAAXX');
    });

    it('five minutes clock function should return AAAAAAAAAAX when the minutes is 50', () => {
        let result = main.fiveMinutesClock(50);     
        expect(result).toBe('AAAAAAAAAAX');
    });

    it('five minutes clock function should return AAAAAAAAAAA when the minutes is 55', () => {
        let result = main.fiveMinutesClock(55);     
        expect(result).toBe('AAAAAAAAAAA');
    });

    it('five minutes clock function should return XXXXXXXXXXX when the minutes is 60', () => {
        let result = main.fiveMinutesClock(60);     
        expect(result).toBe('XXXXXXXXXXX');
    });

    // Tests pour oneMinuteClock

    it('one minute clock function should return XXXX when the minutes is 0', () => {
        let result = main.oneMinuteClock(0);     
        expect(result).toBe('XXXX');
    });

    it('one minute clock function should return AXXX when the minutes is 1', () => {
        let result = main.oneMinuteClock(1);     
        expect(result).toBe('AXXX');
    });

    it('one minute clock function should return AAXX when the minutes is 2', () => {
        let result = main.oneMinuteClock(2);     
        expect(result).toBe('AAXX');
    });

    it('one minute clock function should return AAAX when the minutes is 3', () => {
        let result = main.oneMinuteClock(3);     
        expect(result).toBe('AAAX');
    });

    it('one minute clock function should return AAAA when the minutes is 4', () => {
        let result = main.oneMinuteClock(4);     
        expect(result).toBe('AAAA');
    });

    // tests pour berlinClock
    it('should return the correct Berlin Clock representation for 12:34:56', () => {
        let result = main.berlinClock(19, 42, 56);
        expect(result).toEqual({
            seconds: 'A',
            fiveHours: 'AAAX',
            oneHour: 'AAAA',
            fiveMinutes: 'AAAAAAAAXXX',
            oneMinute: 'AAXX'
        });
    });
});
