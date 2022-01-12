const sqlite3 = require('sqlite3').verbose();

function initialise() {
    const db = new sqlite3.Database('./restaurants2.sqlite');

    try {
        db.serialize(function () { 
            db.run('DROP TABLE IF EXISTS RESTAURANTS')
            db.run("CREATE TABLE IF NOT EXISTS RESTAURANTS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)");
            //db.run('DROP TABLE IF EXISTS MENU_ITEMS')
            db.run("CREATE TABLE IF NOT EXISTS MENUS (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT,restaurants_id INTEGER,FOREIGN KEY (restaurants_id) REFERENCES restaurants(id));");
            db.run('CREATE TABLE IF NOT EXISTS MENU_ITEMS (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER,menus_id INTEGER,FOREIGN KEY (menus_id) REFERENCES menus(id));')
            
            
        });
    } finally { 
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
    }
}

initialise()