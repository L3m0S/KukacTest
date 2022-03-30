import { IVehicle} from '../interfaces/vehicleInterface';

class Car implements IVehicle {

    model: string;
    yearOfFabrication: number
    quantityOfDoors:  number
    brand: string

    constructor({model, yearOfFabrication, quantityOfDoors, brand}: IVehicle) {
        this.model = this.setModel(model);
        this.yearOfFabrication = this.setYearOfFabrication(yearOfFabrication);
        this.quantityOfDoors = this.setQtdOfDoors(quantityOfDoors);
        this.brand = this.setBrand(brand);
    };

    setModel(model: string): string{
        return this.model = model
    };

    setYearOfFabrication(yearOfFabrication: number): number{
        return this.yearOfFabrication = yearOfFabrication;
    };

    setQtdOfDoors(quantityOfDoors: number): any{
        if(quantityOfDoors < 2 || quantityOfDoors > 4){
            throw new Error("The quantity of doors can only be between 2 and 4!")
        } else {
            return this.quantityOfDoors = quantityOfDoors
        };
    };

    setBrand(brand: string): string {
        return this.brand = brand
    };

    getQtdofDoors() {
        return this.quantityOfDoors;
    };
};

export { Car };