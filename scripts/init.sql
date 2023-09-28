CREATE DATABASE db;

\c db

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  email VARCHAR(128),
  comment TEXT
)
