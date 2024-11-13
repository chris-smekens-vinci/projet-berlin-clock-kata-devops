export class Main{
    // 'A' signfie que la lampe est allumée et 'X' signifie qu'elle est éteinte.
    secondClock(number){
        if (number % 2 === 0) return 'A';
        return 'X';
    };

    fiveHoursClock(number){
        let lampA = Math.floor(number / 5);
        
        if(lampA === 1) return 'AXXX';

        if(lampA === 2) return 'AAXX';

        if(lampA === 3) return 'AAAX';

        if(lampA === 4) return 'AAAA';

        return 'XXXX';
    };

    oneHourClock(number){
        let lampA = number % 5;  // Représente les heures restantes après les blocs de 5 heures

        if(lampA===1) return 'AXXX';

        if(lampA===2) return 'AAXX';

        if(lampA===3) return 'AAAX';

        if(lampA===4) return 'AAAA';

        return 'XXXX';
    };

    fiveMinutesClock(number){
        let lampA = Math.floor(number / 5);  // Nombre de blocs de 5 minutes

        // 12 return = bloc de 5 minutes (60 minutes)

        if(lampA===1) return 'AXXXXXXXXXX';

        if(lampA===2) return 'AAXXXXXXXXX';

        if(lampA===3) return 'AAAXXXXXXXX';

        if(lampA===4) return 'AAAAXXXXXXX';

        if(lampA===5) return 'AAAAAXXXXXX';

        if(lampA===6) return 'AAAAAAXXXXX';

        if(lampA===7) return 'AAAAAAAXXXX';

        if(lampA===8) return 'AAAAAAAAXXX';

        if(lampA===9) return 'AAAAAAAAAXX';

        if(lampA===10) return 'AAAAAAAAAAX';

        if(lampA===11) return 'AAAAAAAAAAA';

        return 'XXXXXXXXXXX';
    };

    oneMinuteClock(number){
        let lampA =  number % 5;  // Représente les minutes restantes après les blocs de 5 minutes

        if(lampA===1) return 'AXXX';

        if(lampA===2) return 'AAXX';

        if(lampA===3) return 'AAAX';

        if(lampA===4) return 'AAAAX';

        if(lampA===5) return 'AAAAA';

        return 'XXXXX';
    };
};
