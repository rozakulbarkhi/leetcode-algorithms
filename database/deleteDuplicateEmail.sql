# Write your MySQL query statement below

DELETE Person1
FROM
    Person Person1,
    Person Person2
WHERE
    Person1.id > Person2.id
    AND Person1.email = Person2.email;