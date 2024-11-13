export class Main{
    // 'A' signfie que la lampe est allumée et 'X' signifie qu'elle est éteinte.
    secondClock(number){
        if (number % 2 === 0) return 'A';
        return 'X';
    };
};
