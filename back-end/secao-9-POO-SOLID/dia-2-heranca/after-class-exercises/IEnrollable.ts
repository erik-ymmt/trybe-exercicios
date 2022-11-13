export default interface IEnrollable {
  id: string;
  generateEnrollment(): string;
}
