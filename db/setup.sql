DROP DATABASE IF EXISTS tlt_deli;
CREATE DATABASE tlt_deli;
USE tlt_deli

INSERT INTO `tlt_deli`.`menuItems` (`item`, `description`, `category`, `price`, `createdAt`, `updatedAt`) 
VALUES ('Breakfast Sandwich', 'This is an item description.', 'Main', '6.0', '2020-11-11', '2020-11-11')
,('Meatball Sub', 'This is an item description.', 'Main', '10.0', '2020-11-11', '2020-11-11')
,('Vegie Wrap', 'This is an item description.', 'Main', '10.0', '2020-11-11', '2020-11-11')
, ('Fries', 'This is an item description.', 'Side', '2.0', '2020-11-11', '2020-11-11')
, ('Soda', 'This is an item description.', 'Drink', '2.0', '2020-11-11', '2020-11-11')
, ('Salad', 'This is an item description.', 'Side', '5.0', '2020-11-11', '2020-11-11')
;

INSERT INTO `tlt_deli`.`tableTops` (`tableNumber`, `tableStatus`, `createdAt`, `updatedAt`) 
VALUES (1, 1, '2020-11-11', '2020-11-11')
,(2, 1, '2020-11-11', '2020-11-11')
,(3, 0, '2020-11-11', '2020-11-11')
, (4, 0, '2020-11-11', '2020-11-11')
, (5, 0, '2020-11-11', '2020-11-11');

INSERT INTO `tlt_deli`.`orders` (`custName`, `email`, `createdAt`, `updatedAt`) 
VALUES ('Thalia', 'Thalia@fakeEmial.com', '2020-11-11', '2020-11-11')
,('Leo', 'Leo@fakeEmail.com', '2020-11-11', '2020-11-11')
,('Troy', 'Troy@fakeEmail.com', '2020-11-11', '2020-11-11');


SELECT * FROM orders
SELECT * FROM orderMenuItems