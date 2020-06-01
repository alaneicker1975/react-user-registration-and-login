--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Users (
  id INTEGER PRIMARY KEY, 
  username VARCHAR, 
  password VARCHAR,
  isAdmin TINYINT,
  CONSTRAINT name_unique UNIQUE (username)
);

INSERT INTO Users (
  username, 
  password,
  isAdmin
) VALUES (
  'alaneicker',
  '$2a$10$Orj1c482V61RTe5GiFVX..cpWd1nVy44gS9bgTnJAie8V9SrlfoUe',
  1
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Users;
