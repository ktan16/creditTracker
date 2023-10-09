const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "password123",
    host: 5432,
    database: "credittracker"
});

module.exports = pool;