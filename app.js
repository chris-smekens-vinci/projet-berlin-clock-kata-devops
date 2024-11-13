export class Main{
    // ‘A’ means the lamp is on, and ‘X’ means it is off.”
    secondClock(number){
        if (number % 2 === 0) return 'A';
        return 'X';
    };

    fiveHoursClock(number){
        let lampA = Math.floor(number / 5);  // Number of 5 hours blocks
        /*
            The repeat method allows repeating a string a certain number of times. 
            For example, if lampA = 3, then 'A'.repeat(lampA) = 'AAA'.
            Then, if the max number is 4, we add 'X' to complete the string --> 'AAAX'.
        */
        return 'A'.repeat(lampA) + 'X'.repeat(4 - lampA);    
    };

    oneHourClock(number){
        let lampA = number % 5;  // Represents the remaining hours after the 5 hours blocks
        return 'A'.repeat(lampA) + 'X'.repeat(4 - lampA);
    };

    fiveMinutesClock(number) {
        let lampA = Math.floor(number / 5);  // Number of 5 minutes blocks
        let lamps = '';
        if (lampA === 12) return 'X'.repeat(11);

        for (let i = 1; i <= 11; i++) {
            lamps += i <= lampA ? 'A' : 'X';
        }
        return lamps;
    };

    oneMinuteClock(number) {
        let lampA = number % 5;  // Represents the remaining minutes after the  5 minutes blocks
        return 'A'.repeat(lampA) + 'X'.repeat(4 - lampA);
    };

    berlinClock(hours, minutes, seconds) {
        return {
            seconds: this.secondClock(seconds),
            fiveHours: this.fiveHoursClock(hours),
            oneHour: this.oneHourClock(hours),
            fiveMinutes: this.fiveMinutesClock(minutes),
            oneMinute: this.oneMinuteClock(minutes)
        };
    };

};
