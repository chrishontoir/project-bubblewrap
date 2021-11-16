CREATE TABLE IF NOT EXISTS users (
  id SERIAL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  firstname VARCHAR(20) NOT NULL,
  surname VARCHAR(20) NOT NULL,
  admin CHAR(1) NOT NULL,
  status CHAR(6) NOT NULL,
  attempts INT NOT NULL,
  PRIMARY KEY (email)
);

CREATE TABLE IF NOT EXISTS tokens (
  id SERIAL,
  type VARCHAR(10) NOT NULL,
  email VARCHAR(50) NOT NULL,
  token VARCHAR(50) NOT NULL,
  expiry TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (email, type)
);
