--First command creates the table structure (users with id and name).
--Second command adds one test row so you can confirm the table works.
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)  
);
INSERT INTO users (name) VALUES ('test');