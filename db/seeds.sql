DROP DATABASE IF EXISTS tlt_deli;
CREATE DATABASE tlt_deli;
USE tlt_deli


INSERT INTO menuItems (`item`, `description`, `category`, `price`, `createdAt`, `updatedAt`) 
VALUES('Meat Egg & Cheese Bagel','Bagel with meat of choice, egg and cheese inside', 'Main', '6.0','2020-11-11', '2020-11-11')
,('Egg & Cheese Bagel','Bagel egg and cheese inside', 'Main', '4.0','2020-11-11','2020-11-11')
,('Meat & Cheese Bagel','Bagel with meat of choice and cheese inside', 'Main', '5.0', '2020-11-11','2020-11-11')
,('Stuffed Pizza Bagel','Bagel stuffed with pizza ingredients', 'Main', '6.0', '2020-11-11','2020-11-11')
,('Blueberry Bagel','Bagel with blueberries baked inside dough', 'Main', '2.0', '2020-11-11','2020-11-11')
,('Chocolate Chip Bagel','Bagel with Chocolate Chips baked inside dough', 'Main', '2.0','2020-11-11','2020-11-11')
,('Cinnamon Raisin Bagel','Bagel with Cinnamon and raisin baked in dough', 'Main', '3.0','2020-11-11','2020-11-11')
,('Garlic bagel','Bagel with Garlic baked inside', 'Main', '2.0','2020-11-11','2020-11-11')
,('Veggie','Bagel with vegetables inside', 'Main', '7.0','2020-11-11','2020-11-11')
,('Orange Juice','Juice made of oranges', 'Drink', '1.0','2020-11-11','2020-11-11')

INSERT INTO `tlt_deli`.`orders` (`custName`, `email`, `createdAt`, `updatedAt`) 
VALUES ('Thalia', 'Thalia@fakeEmial.com', '2020-11-26', '2020-11-26')
,('Leo', 'Leo@fakeEmail.com', '2020-11-11', '2020-11-11')
,('Troy', 'Troy@fakeEmail.com', '2020-11-11', '2020-11-11');

INSERT INTO orderMenuItems (`orderId`,`menuItemId`,`qty`,`createdAt`, `updatedAt`)
VALUES 
(1, 1,2, '2020-11-26', '2020-11-26')
,(1, 2,3, '2020-11-26', '2020-11-26')
,(1, 3,1, '2020-11-26', '2020-11-26')
,(2, 2,1, '2020-11-26', '2020-11-26')
,(2, 3,1, '2020-11-26', '2020-11-26')
,(2, 8,1, '2020-11-26', '2020-11-26')
,(3, 1,1, '2020-11-26', '2020-11-26')
,(3, 2,1, '2020-11-26', '2020-11-26')
,(3, 3,1, '2020-11-26', '2020-11-26')