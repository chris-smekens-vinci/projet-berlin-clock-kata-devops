export class Main{
    // 'A' signfie que la lampe est allumée et 'X' signifie qu'elle est éteinte.
    secondClock(number){
        if (number % 2 === 0) return 'A';
        return 'X';
    };

    fiveHoursClock(number){
        let lampsOn = Math.floor(number / 5);
        
        if(lampsOn === 1) return 'AXXX';

        if(lampsOn === 2) return 'AAXX';

        if(lampsOn === 3) return 'AAAX';

        if(lampsOn === 4) return 'AAAA';

        return 'XXXX';
    };
};
