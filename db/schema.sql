CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT NOT NUll AUTO_INCREMENT,
burger_name VARCHAR(255),
devoured BOOLEAN,
`date` TIMESTAMP,
PRIMARY KEY (id)
);
