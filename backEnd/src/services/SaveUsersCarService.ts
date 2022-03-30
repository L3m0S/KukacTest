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

        const database = fs.readFileSync("C:/Users/Lemos/Desktop/KukacTest/backEnd/src/database/database.json", 'utf-8');

        let data = JSON.parse(database)

        console.log(data.vehicles.push(car))

        fs.writeFileSync("C:/Users/Lemos/Desktop/KukacTest/backEnd/src/database/database.json",JSON.stringify(data))
        
        return car;
    };
}

export { SaveUsersCarService };