import { IVehicle } from "../interfaces/vehicleInterface";

class Motorcycle implements IVehicle {

    model: string;
    yearOfFabrication: number;
    quantityOfDoors:  number;
    brand: string;
    wheelsNumber: number;
    passengersNumber: number;

    constructor(model: string, yearOfFabrication: number, quantityOfDoors: number, brand: string, passengersNumber: number, wheelsNumber: number){
        this.model = this.setModel(model);
        this.yearOfFabrication = this.setYearOfFabrication(yearOfFabrication);
        this.quantityOfDoors = this.setQtdOfDoors(quantityOfDoors);
        this.brand = this.setBrand(brand);
        this.wheelsNumber = this.setWheelsNumber(wheelsNumber)
        this.passengersNumber = this.setPassengersNumber(passengersNumber);
    };

    setModel(model: string): any{
        this.model = model
    };

    setYearOfFabrication(yearOfFabrication: number): number{
        return this.yearOfFabrication = yearOfFabrication;
    };

    setQtdOfDoors(quantityOfDoors: number): number{
        if(quantityOfDoors < 2 || quantityOfDoors > 4){
            throw new Error("The quantity of doors can only be between 2 and 4!")
        } else {
            return this.quantityOfDoors = quantityOfDoors
        };
    };

    setBrand(brand: string): any {
        this.brand = brand
    };

    setWheelsNumber(wheelsNumber: number): number {
        if(wheelsNumber > 2 || wheelsNumber < 2) {
            throw new Error("Motorcycle can only have two wheels!")
        } else {
            return this.wheelsNumber = wheelsNumber;
        }
    }

    setPassengersNumber(passengersNumber: number): number {
        if(passengersNumber < 1 || passengersNumber > 2) {
            throw new Error("The motorcycle cannot have more than 2 or less than 1 passengers!")
        } else {
            return this.passengersNumber = passengersNumber;
        };
    };
        

    getQtdofDoors() {
        return this.quantityOfDoors;
    };
}

export { Motorcycle };