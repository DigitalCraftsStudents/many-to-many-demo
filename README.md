# Venmo database models

Users have many
    - Transactions
    - Contacts
Transactions have many
    - Comments
Transactions belong to
    - a User (sender)
    - a User (recipient)
Comments belong to
    - Users
    - Transactions

- As a User I can pay someone so that they're not mad at me.
- As a User I can collect money from someone else
- As a User I can comment on any User's Transaction
- As a User I can view my own Contact's Transactions
- As a User I can view all public Transactions

## Attributes

User
    - id (Primary Key)
    - name
    - hash
    - account number
Transaction
    - id (Primary Key)
    - amount
    - recipient_id (foreign key to Users)
    - sender_id (foreign key to User)
Contacts
    - id (Primary Key)
    - user_id (foreign key to User)
    - contact_id (foreign key to User)
Comments
    - id (Primary Key)
    - content
    - user_id (FK to User)
    - transaction_id (FK to Transaction)

## Model generation commands

```sh
npx sequelize model:generate --name User --attributes 'name:string, hash:string, account_number:string'
npx sequelize model:generate --name Transaction --attributes 'amount:decimal, recipient_id:integer, sender_id: integer'
npx sequelize model:generate --name Contact --attributes 'user_id:integer, contact_id:integer'
npx sequelize model:generate --name Comment --attributes 'content:string, user_id:integer, transaction_id:integer'
```