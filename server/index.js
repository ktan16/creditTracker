const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// user: local
// get local's info
app.get("/users/:user_id", async(req, res) => {
    try {
        const { user_id } = req.params;

        const account = await pool.query(
            "SELECT * FROM accounts WHERE user_id = $1",
            [user_id]
        );
        
        res.json(account.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
});

// update local's balance
app.put("/users/:user_id", async(req, res) => {
    try {
        const { user_id } = req.params;
        const { change } = req.body;
        
        const account = await pool.query(
            "SELECT * FROM accounts WHERE user_id = $1",
            [user_id]
        );

        const userBalance = account.rows[0].user_balance;
        const userMax = account.rows[0].user_max;
        
        const newBalance = userBalance + change;

        await pool.query(
            "UPDATE accounts SET user_balance = $1 WHERE user_id = $2",
            [newBalance, user_id]
        );


        res.json(`Updated balance to ${newBalance}`);
    } catch (error) {
        console.log(error.message);
    }
});

// register
app.post("/users/register", async(req, res) => {
    try {
        const { name, email, password, balance } = req.body;

        const newUser = await pool.query(
            "INSERT INTO accounts (user_name, user_email, user_password, user_balance) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, password, balance]
        );
        
        res.json(newUser.rows[0]);
    } catch (error) {
        console.log(error.message)
    }
});

// login


app.listen(port, () => {
    console.log(`server has started on port ${port}`)
});