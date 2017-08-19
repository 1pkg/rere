CREATE TABLE IF NOT EXISTS image (
  id SERIAL NOT NULL PRIMARY KEY,
  source_link VARCHAR(256) NOT NULL UNIQUE,
  source_alt VARCHAR(256) NOT NULL,
  description TEXT DEFAULT NULL,
  option_id INT NOT NULL REFERENCES option (id) ON DELETE CASCADE,
  time_stamp TIMESTAMP NOT NULL DEFAULT NOW()
);
