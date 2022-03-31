import { Request, Response} from 'express';
import { FindCepService } from '../services/FindCepService';

class FindCepController {

    async handle(request: Request, response: Response) {
        const cep = request.body;

        const findCepService = new FindCepService();

        const results = await findCepService.execute(cep);

        response.json(results);
    }
}

export {FindCepController }