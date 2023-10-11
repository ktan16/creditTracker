CREATE DATABASE creditTracker;

CREATE TABLE accounts(
    user_id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_balance NUMERIC(10, 2) DEFAULT 0,
    user_max NUMERIC(10, 2) NOT NULL,
    UNIQUE (user_email)
);