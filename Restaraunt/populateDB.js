//Manually added data to my tables 
//to check - Click 'view' , 'Command pallete' , type 'SQLite:Open Database' then select 
//which database id like to open 

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./restaurants.sqlite');

try {
    db.serialize(function () { 

    let stmt;

        try {
            // Adding Restaurants 

            //stmt = db.prepare(`INSERT INTO RESTAURANTS (name, imagelink) VALUES (?, ?)`);
            //stmt.run('Bayroot', 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/England/Brighton/brighton-restaurants-hotel-du-vin-bistro.jpg')
            // stmt.run('KFC', 'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/04/18074058/KFC.jpg');
            // stmt.run('McDonalds', 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1&resize=640%2C360');
            // stmt.run('Burger King', 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1058912512%2F0x0.jpg%3Ffit%3Dscale');

            // Adding Menus
            // stmt = db.prepare(`INSERT INTO MENUS (title, restaurants_id ) VALUES (?, ?)`);
            // stmt.run('Breakfast', 1);
            // stmt.run('Breakfast', 2);
            // stmt.run('Lunch', 3);
            // stmt.run('Lunch', 4);
            
            //Adding Menu Items 
            // stmt = db.prepare(`INSERT INTO MENU_ITEMS (name, price, menus_id ) VALUES (?, ?, ?)`);
            // stmt.run('Oysters',7.99, 1);
            // stmt.run('Hash Brown',7.99, 2);
            // stmt.run('Cheese Burger',2, 3);
            // stmt.run('Chicken Royale',7, 4);
            
            
           
        } finally {
            // release resources 
            stmt.finalize();
        }

        // select the rows and print them out
        db.each("SELECT * FROM ((restaurants INNER JOIN menus ON restaurants.id = menus.restaurants_id) INNER JOIN menu_items ON menus.id = menu_items.menus_id);",
            function (err, rows) {  
                console.log(rows);  
            }
        );
    });
} finally {
    // release resources 
    db.close();  
}
