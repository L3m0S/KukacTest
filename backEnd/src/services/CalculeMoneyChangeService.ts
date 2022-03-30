interface iRequest {
    totalValue: number;
    moneyPayd: number;
}

class CalculeMoneyChangeService {

    execute({totalValue, moneyPayd}: iRequest) {

        let moneyChange = moneyPayd - totalValue;

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

        return {hundredNotes, tenNotes, oneNotes }
    }
}

export { CalculeMoneyChangeService }