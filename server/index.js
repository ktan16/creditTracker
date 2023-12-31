const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// register
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, max } = req.body;

    const newUser = await pool.query(
      "INSERT INTO accounts (user_name, user_email, user_password, user_max) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, password, max]
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query(
      "SELECT * from accounts WHERE user_email = $1",
      [email]
    );

    // check if user email in database
    if (user.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // check if passwords match
    if (user.rows[0].user_password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // send user_id
    res.json({ user_id: user.rows[0].user_id });
  } catch (error) {
    console.log(error.message);
  }
});

// get user's info
app.get("/users/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;

    const account = await pool.query(
      "SELECT * FROM accounts WHERE user_id = $1",
      [user_id]
    );

    res.json(account.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// update user's balance
app.put("/users/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const { change } = req.body;

    const account = await pool.query(
      "SELECT * FROM accounts WHERE user_id = $1",
      [user_id]
    );

    const userBalance = parseFloat(account.rows[0].user_balance);

    const newBalance = userBalance + parseFloat(change);

    await pool.query(
      "UPDATE accounts SET user_balance = $1 WHERE user_id = $2",
      [newBalance, user_id]
    );

    res.json(`Updated balance to ${newBalance}`);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
