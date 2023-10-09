CREATE DATABASE creditTracker;

CREATE TABLE user(
    user_id BIGSERIAL PRIMARY KEY NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_balance INT DEFAULT 0,
    UNIQUE (user_email)
);