import Teacher from "./Teacher";

export default abstract class Evaluation {
  constructor(
    private _score: number, 
    public _teacher: Teacher,
  ) { }

  get score() {
    return this._score
  }

  set score(value) {
    this.validateScore(value);
    this._score = value;
  }

  validateScore(value: number) {
    if (value < 0) throw Error('A pontuação não pode ser negativa.');
  }
}
