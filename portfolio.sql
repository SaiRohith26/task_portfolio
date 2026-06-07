CREATE DATABASE tech_portfolio;

USE tech_portfolio;

CREATE TABLE portfolio_projects(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    technology VARCHAR(100),
    details TEXT
);

CREATE TABLE portfolio_feedback(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
);

INSERT INTO portfolio_projects
(name,technology,details)
VALUES
('Weather App',
 'JavaScript',
 'Application displaying weather information'),

('Inventory Tracker',
 'Node.js, MySQL',
 'Inventory management solution'),

('College Portal',
 'HTML,CSS,JS',
 'Student information portal');
