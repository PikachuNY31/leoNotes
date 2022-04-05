-- this will just be for reference

-- CREATE DATABASE pikachuny31;

CREATE TABLE users (
  _id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(24) NOT NULL,
  password VARCHAR(24) NOT NULL,
  date_created TIMESTAMPTZ
)

CREATE TABLE notes (
  _id SERIAL NOT NULL PRIMARY KEY,
  note_title VARCHAR(255),
  price FLOAT,
  discount_percent FLOAT
)

CREATE TABLE transactions (
  _id SERIAL NOT NULL PRIMARY KEY,
  user_id INTEGER REFERENCES users(_id),
  notes_id INTEGER REFERENCES notes(_id)
)

-- store prompts will be in either an array or an object in backend
-- column for transaction date/time?

/*
const storemain = {
  notesForSale: [
    {
        noteTitle: 'Redux',
        price: 2.99,
        tags: 'New',
        discountPercentage: 0
    },
    {
        noteTitle: 'Express',
        price: 2.99,
        tags: false,
        discountPercentage: 25
    },
    ],

    storePrompts: [
    'Message 1',
    'Message 2',
    ],
    shoppingCart: [
    {
      noteTitle: 'Redux',
      price: 2.99,
      discountPercentage: 0
    },
    {
      noteTitle: 'Testing',
      price: 2.99,
      discountPercentage: 0
    }
  ]
}

const usersignup = {
    createdAccount: true,
    message: 'Welcome!'
}

// hello ${name}
const userlogin = {
    isAuthenticated: true,
    userName: 'pikachu',
    email: 'pika@gmail.com',
    name: 'Michael',
}

const usercart = [
    {
       noteTitle: 'Redux',
       price: 2.99,
       sale: 0
    },
    {
       noteTitle: 'Testing',
       price: 2.99,
       sale: 0
    }
]
*/