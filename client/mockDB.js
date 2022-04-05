const storemain = {
  notesForSale: [
    {
        note_title: 'Redux',
        price: 2.99,
        discount_percent: 0
    },
    {
        note_title: 'Express',
        price: 2.99,
        discount_percent: 25
    },
    ],

    // these will be saved in an object
    storePrompts: [
    'Message 1',
    'Message 2',
    ],
    shoppingCart: [
    {
      noteTitle: 'Redux',
      price: 2.99,
      discount_percent: 0
    },
    {
      note_title: 'Testing',
      price: 2.99,
      discount_percent: 0
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
    name: 'Ash',
}

const usercart = [
    {
       noteTitle: 'Redux',
       price: 2.99,
       discount_percent: 0
    },
    {
       noteTitle: 'Testing',
       price: 2.99,
       discount_percent: 0
    }
]


module.exports(
    // storemain
)