import { Car } from "../classes/Car";
import fs from 'fs';
const database = require('../database/database.json')

interface iRequest {
    model: string;
    yearOfFabrication: number;
    quantityOfDoors: number;
    brand: string;
}

class SaveUsersCarService {

    execute({model, yearOfFabrication, quantityOfDoors, brand} : iRequest) {
        
        const car = new Car({model, yearOfFabrication, quantityOfDoors, brand});

        const database = fs.readFileSync("C:/Users/gabriel.lemos/Desktop/Nova pasta/KukacTest-master/backEnd/src/database/database.json", 'utf-8');

        let data = JSON.parse(database)

        console.log(data.vehicles.push(car))

        fs.writeFileSync("C:/Users/gabriel.lemos/Desktop/Nova pasta/KukacTest-master/backEnd/src/database/database.json",JSON.stringify(data, null, 2))
        
        return car;
    };
}

export { SaveUsersCarService };