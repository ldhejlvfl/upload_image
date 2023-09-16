CREATE DATABASE `pics`;

USE `pics`;

CREATE TABLE `images`(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `filename` VARCHAR(255),
    `filepath` VARCHAR(255),
    `upload_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM `images`;