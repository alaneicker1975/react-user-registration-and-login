--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Users (
  id INTEGER PRIMARY KEY, 
  username VARCHAR, 
  password VARCHAR,
  isAdmin TINYINT
);

INSERT INTO Users (
  username, 
  password,
  isAdmin
) VALUES (
  'alaneicker',
  'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG',
  0
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Users;
