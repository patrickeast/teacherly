DROP DATABASE IF EXISTS teacherlyDB;

CREATE DATABASE teacherlyDB;

CREATE TABLE User (
    id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(36) NOT NULL,
    last_name VARCHAR(36) NOT NULL,
    email VARCHAR(500) NOT NULL,
    password VARCHAR(500) NOT NULL,
    about VARCHAR(500) NOT NULL,
    avatar VARCHAR(500) NOT NULL,
    role VARCHAR(100) NOT NULL,
    last_login VARCHAR(100) NOT NULL,
    status VARCHAR enum('active', 'inactive'),
    email_verified enum('yes', 'no') NOT NULL DEFAULT 'no',
    primary key(id)
);

CREATE TABLE Student (
    id INT(11) NOT NULL AUTO_INCREMENT,
    student_id VARCHAR(500) NOT NULL,
    first_name VARCHAR(36) NOT NULL,
    last_name VARCHAR(500) NOT NULL,
    average_grade INT(3) NOT NULL,
    primary key(id)
);

CREATE TABLE Test (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    student_id VARCHAR(500) NOT NULL,
    question VARCHAR(500) NOT NULL,
    possibleQuestionScore INTEGER(3) NOT NULL,
    actualQuestionScore INTEGER(3) NOT NULL,
    possibleTestScore INTEGER(3) NOT NULL,
    actualTestScore INTEGER(3) NOT NULL,
    primary key(id)
);