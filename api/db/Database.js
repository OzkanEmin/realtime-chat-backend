const mongoose = require('mongoose');

let databaseInstance = null;

class Database {
    constructor() {
        if (databaseInstance) {
            return databaseInstance;
        }
        databaseInstance = this;
    }

    async connect(options) {
        try {
            const connectionString = options.CONNECTION_STRING;
            if (!connectionString) {
                throw new Error('CONNECTION_STRING is missing');
            }
            console.log("DB CONNECTING...");
            const db = await mongoose.connect(connectionString);
            this.connection = db;
            console.log("DB CONNECTED");
        } catch (err) {
            console.error('Database connection error', err);
            process.exit(1);
        }
    }
}

module.exports = Database;
