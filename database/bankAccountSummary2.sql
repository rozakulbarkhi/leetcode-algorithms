# Write your MySQL query statement below

SELECT
    Users.name, (
        SUM(
            CASE
                WHEN Transactions.amount > 0 THEN Transactions.amount
                ELSE 0
            END
        ) + SUM(
            CASE
                WHEN Transactions.amount < 0 THEN Transactions.amount
                ELSE 0
            END
        )
    ) as balance
FROM Users
    JOIN Transactions ON Users.account = Transactions.account
GROUP BY Transactions.account
HAVING
    SUM(Transactions.amount) > 10000;