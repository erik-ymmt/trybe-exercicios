// Musician.ts
import Flute from './Flute';

export default class Musician {
  /* Não se preocupe com problemas do eslint, estamos usando um exemplo didático */
  // Agora a flauta é recebida como parâmetro
  constructor(
    public name: string,
    public flute: Flute,
  ) { }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const flute = new Flute('Minha flauta');
const musician = new Musician('Márcia', flute);
musician.play();