const pg = require("pg");

const run = async () => {

    const client = new pg.Client({
        // everyone should do this
        database: "puppies",
        // you may not need these:
        user: "joe-alves",
        password: "buttons"
    });
    await client.connect();

    // Add new rows to our dogs table.
    const seedNewData = async () => {

        const insertNewDogSQL = `INSERT INTO dogs(name, breed) VALUES($1, $2)`;

        await client.query(insertNewDogSQL, ["Penny", "Havanese"]);
        await client.query(insertNewDogSQL, ["Loaf", "Corgi"]);
        await client.query(insertNewDogSQL, ["Boomer", "Yellow Labrador"]);

    };


    try {
        seedNewData();
    } catch (e) {
        console.log(e)
    }
    
    

};
run();