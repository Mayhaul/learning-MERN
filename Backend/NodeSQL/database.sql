CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(50),
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO user (id,username,email,password)
VALUES
("1","mayhaul","mehulv2k6@gmail.com","nigru"),
("2","Adityasharma2007","attitudeboy02@gmail.com","fuckmydick");

