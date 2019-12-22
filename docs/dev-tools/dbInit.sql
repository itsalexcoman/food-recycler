drop user if exists 'fr_user'@'localhost';
create user 'fr_user'@'localhost' identified by 'fr_pass';
drop database if exists fr_database;
create database fr_database;
grant all privileges on fr_database.* to 'fr_user'@'localhost' with grant option;