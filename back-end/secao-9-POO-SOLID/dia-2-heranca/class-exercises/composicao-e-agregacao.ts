interface Logger {
  log(param:string): void
}

interface Database {
  logger: Logger;
  save(key:string, value:string): void;
}

class ConsoleLogger implements Logger {
  constructor() {}

  log(param: string) {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string) {
    console.log(`${param} 2`);
  }
}

class ExampleDatabase implements Database {
  logger: Logger = new ConsoleLogger;
  constructor(param: Logger) {
    this.logger = param;
  }
  save(key: string, value: string) {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const example1 = new ExampleDatabase(logger1);
const example2 = new ExampleDatabase(logger1);
const example3 = new ExampleDatabase(logger2);

const e1 = example1.save('romario', 'brasil tetra');
const e2 = example2.save('ronaldinho', 'brasil penta');
const e3 = example3.save('neymar', 'brasil hexa');
