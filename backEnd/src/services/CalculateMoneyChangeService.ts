interface iRequest {
    totalValue: number;
    moneyPaid: number;
}

class CalculateMoneyChangeService {

    execute({totalValue, moneyPaid}: iRequest) {

        if(totalValue < 0) {
            throw new Error("Total value must be positive!")
        };

        if(moneyPaid < 0) {
            throw new Error("Money paid must be greater than zero!")
        }

        if(moneyPaid < totalValue) {
            throw new Error("Money paid cannot be less than the total value!")
        };

        const change = moneyPaid - totalValue;
        let moneyChange = change;

        let oneNotes = 0;
        let tenNotes = 0;
        let hundredNotes = 0;

        while(moneyChange > 0) {
            if(moneyChange >= 100){
                hundredNotes++;
                moneyChange -= 100;
            } else if(moneyChange < 100 && moneyChange >= 10) {
                tenNotes++;
                moneyChange -= 10;
            } else {
                oneNotes = moneyChange;
                moneyChange -= oneNotes
            };
        };

        const minimumAmountOfNotes = hundredNotes + tenNotes + oneNotes;

        return {totalValue, change, minimumAmountOfNotes, hundredNotes, tenNotes, oneNotes}
    }
}

export { CalculateMoneyChangeService }