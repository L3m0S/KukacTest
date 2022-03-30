import { Request, Response } from 'express';
import { GeneratePalindromesService } from '../services/GeneratePalindromesService';


class GeneratePalindromesController {

    handle( request: Request, response: Response) {
        console.log(request.body)
        const { initialNumber, limitNumber } = request.body;

        console.log(typeof(initialNumber))

        const generatePalindromesService = new GeneratePalindromesService();

        const palindromes = generatePalindromesService.execute({ initialNumber, limitNumber} );

        return response.json(palindromes);
        
    };
};

export { GeneratePalindromesController }