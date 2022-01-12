const fsp = require('fs').promises; // Node.js file system module with promises

async function load() {
    console.log('calling load');
    // wait for the file to be read
    const buffer = await fsp.readFile('./restaurants.json');
    const restaurants = (JSON.parse(String(buffer)));
    //console.log(restaurants);
   
    for (let i = 0; i < restaurants.length; i++) {
       //console.log(`${restaurant.name}, ${restaurant.image}`)

            for (let j = 0; j < restaurants[i].menus.length; j++) {
                const menu = restaurants[i].menus[j];
                //console.log(`${menu.title}, restaurant_id${i+1}`);
                
            

                for (let k = 0; k < restaurants[i].menus[j].items.length; k++) {
                   const menu_item = restaurants[i].menus[j].items[k];
                    console.log(`${menu_item.name}, ${menu_item.price},menu_id${i+1}`);
                    
                        
                    }
            
        }
        
    }
}

load()