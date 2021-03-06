const { TestWatcher } = require('jest');

const sqlite3 = require('sqlite3').verbose();



describe('restaurant test suites', function(){

    const db = new sqlite3.Database('./restaurants2.sqlite');

    test('checks if data has been added to database', function (done){

        try{
            
       db.get('SELECT * FROM restaurants WHERE id=1', function(err, data){
           if(err){
               console.log(err)
           } else {
               //console.log(data);
               expect(data.name).toBe('Bayroot')
           }
           
        })
    } finally {
        db.close()
        done()
    }
    })
    
    test('checks ', function (done){

        try{
            
       db.get("SELECT count(*) as count FROM restaurants", function(err, data){
           if(err){
               console.log(err)
           } else {
               //console.log(data);
               expect(data.count).toBe(8)
           }
           
        })
    } finally {
        db.close()
        done()
    }
    })
})