DROP DATABASE IF EXISTS To_Dos_DB;

CREATE DATABASE To_Dos_DB;

USE To_Dos_DB;

CREATE TABLE to_do_list (
	id INT NOT NULL AUTO_INCREMENT,
	text_list VARCHAR(300) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
     PRIMARY KEY (id)
);

INSERT INTO to_do_list (text_list, completed)
VALUES("play animal crossing with ying at 9P.M", true),
		("get attuned to ony's lair", false),
        ("hit 60", false);