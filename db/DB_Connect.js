const mongoose = require('mongoose');

const DB_Connect = async (DB_Name, DB_URL)=> {
    try {
        let DB_Options = {
            dbName: DB_Name
        }
        await mongoose.connect(DB_URL, DB_Options)
        console.log(`Database Connection Successfull`);
    } catch (error) {
        console.log(`Error connection refused: ${error}`);
    }
}

module.exports = { DB_Connect };