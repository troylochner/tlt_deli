/*THIS WILL JOIN TOGETHER MENUITEM + ORDER*/
SELECT o.id,mi.item,mi.price
FROM orderMenuItems omi
JOIN orders o ON omi.orderId=o.id
JOIN menuItems mi ON omi.menuItemId=mi.id
