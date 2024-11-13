export class Main{
    // 'A' signfie que la lampe est allumée et 'X' signifie qu'elle est éteinte.
    secondClock(number){
        if (number % 2 === 0) return 'A';
        return 'X';
    };

    fiveHoursClock(number){
        let lampA = Math.floor(number / 5);  // Nombre de blocs de 5 heures
        /*
        la méthode repeat permet de répéter une chaine de caractères un certain nombre de fois, si lampA = 3 alors 'A'.repeat(lampA) = 'AAA' 
        et ensuite si le nombre max est 4 alors on ajoute des 'X' pour compléter la chaine de caractère --> 'AAAX'
        */
        return 'A'.repeat(lampA) + 'X'.repeat(4 - lampA);    
    };

    oneHourClock(number){
        let lampA = number % 5;  // Représente les heures restantes après les blocs de 5 heures
        return 'A'.repeat(lampA) + 'X'.repeat(4 - lampA);
    };

    fiveMinutesClock(number) {
        let lampA = Math.floor(number / 5);  // Nombre de blocs de 5 minutes
        let lamps = '';
        if (lampA === 12) return 'X'.repeat(11);

        for (let i = 1; i <= 11; i++) {
            lamps += i <= lampA ? 'A' : 'X';
        }
        return lamps;
    }

    oneMinuteClock(number) {
        let lampA = number % 5;  // Représente les minutes restantes après les blocs de 5 minutes
        return 'A'.repeat(lampA) + 'X'.repeat(4 - lampA);
    }

    berlinClock(hours, minutes, seconds) {
        return {
            seconds: this.secondClock(seconds),
            fiveHours: this.fiveHoursClock(hours),
            oneHour: this.oneHourClock(hours),
            fiveMinutes: this.fiveMinutesClock(minutes),
            oneMinute: this.oneMinuteClock(minutes)
        };
    }

};
