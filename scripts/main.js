/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {

let total = 0;
let acePlayed = false;

  for (var i = 0; i < hand.length; i++) {
    let temp;
    let ace;
    if (hand[i] === "A") {
      acePlayed = true;
      temp = 11;
    } else if ((hand[i] === "K") || (hand[i] === "J") || (hand[i] === "Q")) {
      temp = 10;
    } else {
      temp = Number(hand[i])
    }
    total += temp;
    if ((total > 21) && (acePlayed = true)) {
      total -= 10;
    }

  }
console.log(total);
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
