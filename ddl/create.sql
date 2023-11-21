CREATE DATABASE IF NOT EXISTS dockerdb;

USE dockerdb;

CREATE TABLE IF NOT EXISTS people (
    id int not null AUTO_INCREMENT PRIMARY KEY, 
    name varchar(255)
);

COMMIT;