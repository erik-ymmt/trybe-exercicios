import Evaluation from "./Evaluation";

export default class EvaluationResult {
  constructor(
    private _evaluation: Evaluation,
    private _score: number
  ) {
    this.score = _score;
  }

  get score() {
    return this._score
  }

  set score(value) {
    this.validateScore(value);
    this._score = value;
  }

  validateScore(value: number) {
    if (value < 0) throw Error('A pontuação não pode ser negativa.');

    const maxScore = this._evaluation.score
    if (value > maxScore) throw Error(`A pontuação máxima é ${maxScore}`)
  }
}