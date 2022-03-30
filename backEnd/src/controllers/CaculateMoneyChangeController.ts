import { Request, Response } from 'express';
import { CalculateMoneyChangeService } from '../services/CalculateMoneyChangeService';

class CalculateMoneyChangeController {

    handle(request: Request, response: Response) {
        const {totalValue, moneyPaid } = request.body;

        const calculeMoneyChangeService = new CalculateMoneyChangeService();

        const moneyChange = calculeMoneyChangeService.execute({totalValue, moneyPaid});

        response.json(moneyChange);
    }
}

export { CalculateMoneyChangeController }