CREATE TABLE Restaurant 
(id INTEGER PRIMARY KEY AUTOINCREMENT, 
name TEXT, 
ImageLink INTEGER);

INSERT INTO Restaurant (name)
VALUES ('McDonalds');
INSERT INTO Restaurant(name)
VALUES ('KFC');
INSERT INTO Restaurant(name)
VALUES ('Wingstop');


UPDATE Restaurant
SET name = 'Burger King'
WHERE name = 'McDonalds';
SELECT * FROM Restaurant;

CREATE TABLE Menu 
(id INTEGER PRIMARY KEY AUTOINCREMENT, 
title TEXT);

INSERT INTO Menu (title)
VALUES ('Breakfast');
INSERT INTO Menu(title)
VALUES ('Lunch');

DELETE FROM Menu 
WHERE title = 'Breakfast';


SELECT * FROM Menu;

CREATE TABLE MenuItem
(id INTEGER PRIMARY KEY AUTOINCREMENT, 
name TEXT, 
price INTEGER);

INSERT INTO MenuItem(name, price)
VALUES ('Burger', 12 );
INSERT INTO MenuItem(name, price)
VALUES ('Wings', 8 );
INSERT INTO MenuItem(name, price)
VALUES ('Fries', 3.50 );

SELECT * FROM MenuItem
