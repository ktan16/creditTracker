CREATE DATABASE creditTracker;

CREATE TABLE accounts(
    user_id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_balance INT DEFAULT 0,
    user_max INT NOT NULL,
    UNIQUE (user_email)
);