/*Tables*/

--restaurants
CREATE TABLE restaurants 
        (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT, 
        ImageLink INTEGER
);

--Menus
CREATE TABLE menus
        (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT,
        restaurants_id INTEGER,
        FOREIGN KEY (restaurants_id) 
        REFERENCES restaurants(id)
);

--Menu Items 
CREATE TABLE menu_items
        (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT, 
        price INTEGER,
        menus_id INTEGER,
        FOREIGN KEY (menus_id) 
        REFERENCES menus(id)
);

/*INSERTS for restaurants*/
INSERT INTO restaurants (name) VALUES ('McDonalds');
INSERT INTO restaurants(name) VALUES ('KFC');
INSERT INTO restaurants(name) VALUES ('Wingstop');

/* UPDATE restaurants
SET name = 'Burger King'
WHERE name = 'McDonalds';
SELECT * FROM restaurants; */

/*INSERTS for Menus*/
INSERT INTO menus(title, restaurants_id) VALUES ('Breakfast', 1);
INSERT INTO menus(title, restaurants_id) VALUES ('Lunch', 2);
INSERT INTO menus(title, restaurants_id) VALUES ('Dinner', 3);

/*DELETE FROM menus 
WHERE title = 'Breakfast'; 
SELECT * FROM menus;*/

/*INSERTS for Menu Items*/
INSERT INTO menu_items(name, price, menus_id) VALUES ('breakfast wrap', 12, 1 );
INSERT INTO menu_items(name, price, menus_id) VALUES ('Pancakes', 3.50, 1 );
INSERT INTO menu_items(name, price, menus_id) VALUES ('burger', 5.49, 2);
INSERT INTO menu_items(name, price, menus_id) VALUES ('Krushem', 1.50, 2 );
INSERT INTO menu_items(name, price, menus_id) VALUES ('wings', 1.99, 3 );
INSERT INTO menu_items(name, price, menus_id) VALUES ('Fries', 1, 3 );

--SELECT * FROM menu_items;



--JOIN STATEMENTS
-- Select the name of a menu from a specific restaraunt and list all the menu items 
SELECT menus.title, menu_items.name, menu_items.price
FROM menus
INNER JOIN menu_items ON menus.id = menu_items.menus_id
WHERE restaurants_id = 1;

--Select all the restaurants with a count of the number of menus each restaraunt has
SELECT restaurants.name, COUNT(menus.id)
FROM restaurants
INNER JOIN menus ON restaurants.id = menus.restaurants_id
GROUP BY restaurants.name;


-- Select all the menus, with the total cost of all the menu items summed. In descending order 

-- For some reason, when i run the below code, it only prints out the first Menu Title and the sum..
SELECT menus.title, SUM(menu_items.price)
FROM menus
INNER JOIN menu_items ON menus.id = menu_items.menus_id;
