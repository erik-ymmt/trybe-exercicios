interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(): void;
  read(): void;
  update(): void;
  delete(): void;
}

class LocalDbModel implements IModel {
  create() {};
  read() {};
  update() {};
  delete() {};
}

class CharacterService {
  constructor(param: LocalDbModel) {}
}

class MockedDbModel implements IModel {
  create() {};
  read() {};
  update() {};
  delete() {};
}
