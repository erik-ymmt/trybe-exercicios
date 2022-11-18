import { IFlyingVehicle } from "./interfaces";

export default class Airplane implements IFlyingVehicle {
  fly(): void {
    console.log("Flying a airplane");
  }
}