class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand:string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
}

const tvSamsung = new Tv('samsumg', 32, '4k', ['hdmi']);

tvSamsung.turnOn();
