require('dotenv').config();

module.exports = {
    development: {
        username: "postgres",
        password: "123456",
        database: "mygram",
        host: "127.0.0.1",
        dialect: "postgres"
    },
    test: {
        username: "postgres",
        password: "123456",
        database: "mygram_test",
        host: "127.0.0.1",
        dialect: "postgres"
    },
    production: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_PG,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: "postgres"
    }
}