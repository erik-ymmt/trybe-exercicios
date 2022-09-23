CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE zoo.animals(
  id_animal INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  specie VARCHAR(45),
  sex VARCHAR(15),
  age INT,
  location VARCHAR(45)
);

CREATE TABLE zoo.managers(
  id_manager INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL
);

CREATE TABLE zoo.keeper(
  id_keeper INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  id_manager INT,
  FOREIGN KEY (id_manager) REFERENCES zoo.managers (id_manager)
);

CREATE TABLE zoo.animal_keeper(
  id_animal INT,
  id_keeper INT,
  CONSTRAINT PRIMARY KEY (id_animal, id_keeper),
  FOREIGN KEY (id_animal) REFERENCES zoo.animals (id_animal),
  FOREIGN KEY (id_keeper) REFERENCES zoo.keeper (id_keeper)
);

INSERT INTO zoo.animals
(`name`,
`specie`,
`sex`,
`age`,
`location`)
VALUES
('Bob', 'Zebra', 'male', 3, 'north'),
('Miss', 'giraffe', 'female', 4, 'center'),
('Bernadette', 'penguin', 'female', 4, 'north'),
('Travis', 'lion', 'male', 2, 'south');

INSERT INTO `zoo`.`managers`
(`name`)
VALUES
('Marko'),
('Pamela');

INSERT INTO `zoo`.`keeper`
(`name`,
`id_manager`)
VALUES
('Ronald', 1),
('Mariah', 1),
('Grace', 2);

INSERT INTO `zoo`.`animal_keeper`
(`id_animal`,
`id_keeper`)
VALUES
(1,1),
(1,2),
(2,3),
(3,4);

