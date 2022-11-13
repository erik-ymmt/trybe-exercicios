import Evaluation from "./Evaluation"
import Teacher from "./Teacher";

export default class Project extends Evaluation {
  constructor(
    score: number,
    teacher: Teacher
  ) {
    super(score, teacher);
    this.verifyScore(score);
  }

  verifyScore(value: number) {
    if (value > 25) throw Error('A nota máxima é 50');
  }
}