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
};
