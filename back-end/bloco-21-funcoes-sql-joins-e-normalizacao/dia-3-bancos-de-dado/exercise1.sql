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

