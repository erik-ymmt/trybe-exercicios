export default class ReadingTracker {
  public readingGoal: number;
  public booksRead: number;
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
  }

  progressNotification(): void {
    if (this.booksRead >= this.readingGoal) {
      console.log(
        'Congratulations! You\'ve reached your reading goal!',
      );
    }
    console.log(
      'There are still some books to go!',
    );
    }
}
