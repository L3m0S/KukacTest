import { Request, Response } from 'express';
import { CalculeMoneyChangeService } from '../services/CalculeMoneyChangeService';

class CalculeMoneyChangeController {

    handle(request: Request, response: Response) {
        const {totalValue, moneyPayd } = request.body;

        const calculeMoneyChangeService = new CalculeMoneyChangeService();

        const moneyChange = calculeMoneyChangeService.execute({totalValue, moneyPayd});

        response.json(moneyChange);
    }
}

export { CalculeMoneyChangeController }