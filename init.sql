-- Create the 'biab' user if it doesn't exist
CREATE USER IF NOT EXISTS 'biab'@'localhost' IDENTIFIED BY 'Sairam@123';

-- Grant all privileges to the 'biab' user for all databases and tables
GRANT ALL PRIVILEGES ON *.* TO 'biab'@'localhost' WITH GRANT OPTION;

-- Flush privileges to apply the changes
FLUSH PRIVILEGES;
