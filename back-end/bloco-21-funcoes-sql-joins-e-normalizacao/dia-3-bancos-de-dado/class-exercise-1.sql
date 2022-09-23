CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE normalization.employees (
    employee_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    registry_date DATE
);

CREATE TABLE normalization.sector (
    sector_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE normalization.employees_sector (
    employee_id INT NOT NULL,
    sector_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (employee_id , sector_id),
    FOREIGN KEY (employee_id)
        REFERENCES normalization.employees (employee_id),
    FOREIGN KEY (sector_id)
        REFERENCES normalization.sector (sector_id)
);

