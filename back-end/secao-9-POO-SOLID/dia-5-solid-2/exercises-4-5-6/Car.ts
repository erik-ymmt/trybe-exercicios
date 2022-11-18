import { ILandVehicle } from "./interfaces";

export default class Car implements ILandVehicle {
  drive(): void {
    console.log("Drive a regular car");
  }
}