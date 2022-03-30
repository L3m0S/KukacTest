import {Request, Response } from 'express';
import { SaveUsersCarService } from '../services/SaveUsersCarService';

class SaveUsersCarController {

    handle(request: Request, response: Response) {
        const{type, model, yearOfFabrication, quantityOfDoors, brand} = request.body;

        const saveUsersCarService =  new SaveUsersCarService();

        const car = saveUsersCarService.execute({model, yearOfFabrication, quantityOfDoors, brand});

        response.json(car);
    }
}

export { SaveUsersCarController}