//Loaded data from the restaraunts.JSON file, loop through them and added each item to the Database 

const fsp = require('fs').promises; // Node.js file system module with promises
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./restaurants2.sqlite');


async function load() {

    console.log('calling load');
    // wait for the file to be read
    const buffer = await fsp.readFile('./restaurants.json');
    const restaurants = (JSON.parse(String(buffer)));
    //console.log(restaurants);

    try {
        db.serialize(function () {

            let stmt;
            for (let i = 0; i < restaurants.length; i++) {
                // try {
                //     stmt = db.prepare(`INSERT INTO RESTAURANTS (name, imagelink) VALUES (?, ?)`);
                //     stmt.run(`${restaurants[i].name}`, `${restaurants[i].image}`);
                //     console.log(`${restaurants[i].name}, ${restaurants[i].image}`)
                // } finally {
                //    // stmt.finalize()
                // }
                for (let j = 0; j < restaurants[i].menus.length; j++) {
                    const menu = restaurants[i].menus[j];
                    // try {
                    // stmt = db.prepare(`INSERT INTO MENUS (title, restaurants_id ) VALUES (?, ?)`); 
                    // stmt.run(`${menu.title}`, `${i+1}`);
                    // } finally {
                    //     stmt.finalize()
                    // }
                    //console.log(`${menu.title}, ${i+1}`); // {i+1} is the restaraunts id

                    for (let k = 0; k < restaurants[i].menus[j].items.length; k++) {
                        const menu_item = restaurants[i].menus[j].items[k];
                        try{
                            stmt = db.prepare(`INSERT INTO MENU_ITEMS (name, price, menus_id ) VALUES (?, ?, ?)`);
                            stmt.run(`${menu_item.name}`,`${menu_item.price}` ,`${i+1}`);
                        } finally {
                            stmt.finalize()
                        }
                        //console.log(`${menu_item.name}, ${menu_item.price}, ${i+1}`); //// {i+1} is the menus id

                    }
                }
            }
        });
    } finally {
        // release resources 
        db.close();
    }

}

load()


