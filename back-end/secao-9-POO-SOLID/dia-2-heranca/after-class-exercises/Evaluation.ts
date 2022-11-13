export default class Evaluation {
  constructor(
    private _score: number, 
    public _teacher: string,
    private _type: string,
  ) {

  }

  get score() {
    return this._score
  }

  set score(value) {
    this.validateScore(value);
    this._score = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this.validateType(value);
    this._type = value;
  }

  validateType(value: string) {
    if (value !== 'prova' && value !== 'trabalho') throw Error('O tipo deve ser prova ou trabalho.');
  }

  validateScore(value: number) {
    if (value < 0) throw Error('A pontuação não pode ser negativa.');
    if (this._type === 'prova' && value > 25) throw Error('A pontuação máxima de prova é 25.');
    if (this._type === 'trabalho' && value > 50) throw Error('A pontuação máxima de trabalho é 50.');
  }
}
