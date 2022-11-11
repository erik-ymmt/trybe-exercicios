class Persona {
  constructor(public name: string) {
    console.log(this.name);
    
  }
}

class Footballer extends Persona {
  constructor(public position: string, name: string) {
    super(name);
    console.log(`${this.name} plays as a ${this.position}`);
  }
}  

class DJ extends Footballer {
  constructor(public music: string, position:string, name: string) {
    super(position, name);
    console.log(`${this.name} plays as a ${this.position} and also is a ${this.music} DJ`);
  }
}

const someone = new DJ('pop music', 'striker', 'haaland');

// console.log(someone);
