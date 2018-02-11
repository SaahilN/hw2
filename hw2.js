// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw2
// (Windows)   cd c:\code\hw2
// Then type:
// node hw2.js

// HOMEWORK 2

// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 }
]

// Write a function that, when given a useruser (i.e. brian, ben, or jeff),
// returns the number of KelloggCoin that user has in their KelloggCoin "wallet".

// HINT! You will have to use all the JavaScript programming fundamentals we've
// learned about so far, i.e. variables, arrays, objects, conditionals, loops,
// and functions, to complete this task. There are ways to do this using some
// more advanced array functions, and by all means, experiment with this, but
// get it done using just the basics first.

// It should print out:
// Brian's KelloggCoin bal is 8000
// Ben's KelloggCoin bal is 10350
// Jeff's KelloggCoin bal is 2650

// Defined the wallet name
  let wallet = [
    {user:"brian", bal: 0},
    {user:"ben", bal: 0},
    {user:"jeff", bal: 0}
  ]

// Defined the relation between wallet name & user
  let getbal = function(walletuser){
    for (let x=0; x< wallet.length; x++)
    {if (wallet[x].user === walletuser)
    return wallet[x].bal}
  }

// Adding on the basis of from or to command
  for (let x = 0; x < blockchain.length; x++) {
    for (let y = 0; y < wallet.length; y++) {
      if (blockchain[x].toUser === wallet[y].user) {
       wallet[y].bal += blockchain[x].amount
     }
      else if (blockchain[x].fromUser === wallet[y].user){
        wallet[y].bal -=  blockchain[x].amount
      }
    }
  }




  console.log("Brian's KelloggCoin bal is " + getbal("brian"));
  console.log("Ben's KelloggCoin bal is " + getbal("ben"));
  console.log("Jeff's KelloggCoin bal is " + getbal("jeff"));
