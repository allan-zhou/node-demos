
CREATE USER 'nodejs'@'localhost' IDENTIFIED BY 'nodejs';

GRANT ALL PRIVILEGES ON *.* TO 'nodejs'@'localhost' WITH GRANT OPTION;

CREATE USER 'nodejs'@'%' IDENTIFIED BY 'nodejs';

GRANT ALL PRIVILEGES ON *.* TO 'nodejs'@'%' WITH GRANT OPTION;