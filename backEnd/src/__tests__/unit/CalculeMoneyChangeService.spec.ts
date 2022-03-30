import { CalculateMoneyChangeService } from "../../services/CalculateMoneyChangeService";

describe("Calculate money change" , () => {

    let calculateMoneyChangeService: CalculateMoneyChangeService;

    beforeAll(() => {
        calculateMoneyChangeService = new CalculateMoneyChangeService();
    });

    it("Should return the number of notes(one/ten/hundred) of the money change", () => {
        const requestData = {
            totalValue: 11,
            moneyPaid: 662
        };

        const change = calculateMoneyChangeService.execute(requestData);
        
        expect(change).toStrictEqual({
            totalValue: 11,
            change: 651,
            minimumAmountOfNotes: 12,
            hundredNotes: 6, 
            tenNotes: 5, 
            oneNotes: 1 
        });
    });

    it('"Should throw an error "Total value must be positive!"' , () => {

        const requestData = {
            totalValue: -1,
            moneyPaid: 100
        };

        expect(() => {
            calculateMoneyChangeService.execute(requestData);
        }).toThrow("Total value must be positive!");
    });

    it('Should throw an error "Money paid cannot be less than the total value!"', () => {
        const requestData = {
            totalValue: 100,
            moneyPaid: 50
        };

        expect(() => {
            calculateMoneyChangeService.execute(requestData);
        }).toThrow("Money paid cannot be less than the total value!");
    });

    it('Should throw an error "Money paid must be greater than zero!"', () => {
        const requestData = {
            totalValue: 1,
            moneyPaid: -1
        };

        expect(() => {
            calculateMoneyChangeService.execute(requestData);
        }).toThrow("Money paid must be greater than zero!");
    })
})