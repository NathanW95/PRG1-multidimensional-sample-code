task = ["a", "b", "c", "d"]


// for (let letter in task){
//   console.log(task[letter])
// }



// let scores = [ [78, 81, 84], [55, 54, 62], [89, 71, 90] ];


const scores = [ [78, 81, 84], 
               [55, 54, 62], 
               [89, 71, 90] ];


let tests = ["c","b","a"]
tests.sort()
// console.log(tests)



// console.log(scores.length);



// for (score of scores){
//   console.log(score);
// }


function sumOf2dArray() {
  let sum = 0;
  for (let score of scores){
    for (let element of score) {
        sum += element;
    }
  }
    return sum;
}

function averageOf2dArray() {
  let sum = 0;
  for (const score of scores){
    for (const element of score) {
        sum += element;
    }
  }
  return (sum / (scores.length * scores[0].length)).toFixed(2);
}


// for (let i = 0; i < scores.length; i++){
//   console.log(scores[i])
// }


// for (let i = 0; i < scores.length; i++){
//   for (let j = 0; j < scores[i].length; j++){
//     console.log(scores[i][j]);
//   }
// }


// let max = 0

// scores.forEach(score => {
//   score.forEach(value => {
//     if (value > max){
//       max = value
//     }
//   })
// })
// console.log(max)


// function calculateMaxValue(df1){
//   let max = 0;
//   df1.forEach(score => {
//     score.forEach(value => {
//       if (value > max){
//         max = value;
//       }
//     })
  
//   })
//   return max
// }


// console.log(calculateMaxValue(scores))



console.log(sumOf2dArray());
console.log(averageOf2dArray(scores));

// plants = [["Begonia", "Daisy", "Lily", "Peony", "Rose", "Sunflower", "Lavender"], [1,6,3,4,5,null,2]]

// plantList = plants[0];
// currentElement = 0

// for (i = 0; i < plantList.length; i++){
//     if (currentElement != null) {
//     console.log(plants[0][currentElement]);
//     currentElement = plants[1][currentElement]
//     }  
// }

// plants = [["Begonia", "Daisy", "Lily", "Peony", "Rose", "Sunflower", "Lavender"], [1,6,3,4,5,null,2]]
//   let currentElement = 0;

// while (currentElement != null) {
//   console.log(plants[0][currentElement])
//   currentElement = plants[1][currentElement]
// }

const readline = require("readline-sync");

const gameBoard = [
        ['','',''],
        ['','',''],
        ['','',''],
]

// console.table(gameBoard);

function player1Move(){
  let player1Row = readline.question(`Player1: Which row would you like to place your symbol\n(Enter a number):\n`)
  let player1Col = readline.question(`Player1: Which column would you like to place your symbol\n(Enter a number):\n`)
    if (gameBoard[player1Row][player1Col] === '') {
     gameBoard[player1Row][player1Col] = 'x';
     console.table(gameBoard)
   }
}

function player2Move(){
  let player2Row = readline.question(`Player2: Which row would you like to place your symbol\n(Enter a number):\n`)
  let player2Col = readline.question(`Player2: Which column would you like to place your symbol\n(Enter a number):\n`)
  if (gameBoard[player2Row][player2Col] === '') {
    gameBoard[player2Row][player2Col] = 'o';
    console.table(gameBoard)
  }
}


// player1Move();
// player2Move();
// gameBoard(player1Response)
console.table(gameBoard);


function fullGame() {
  let currentPlayer = 'x';
    while (gameBoard[0].includes('') || gameBoard[1].includes('') || gameBoard[2].includes('')) {
      if (currentPlayer = 'x') {
          player1Move();
          currentPlayer = 'o';
      }
      if (currentPlayer = 'o') {
        player2Move();
        currentPlayer = 'x';
      }
    }
}

fullGame();
// console.table(gameBoard[0].includes(''));






//To declare an empty multidimensional array, you use the same syntax as declaring one-dimensional array:
//let activities = [];

//defines a two-dimensional array named activities
// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

//console.log(activities[3][1]); // 9

//to add a new element at the end of the multidimensional array, you use the push() method 

//activities.push(['Study',2]);

//To insert an element in the middle of the array, you use the splice() method. The following inserts an element in the second position of the activities array:

//activities.splice(1, 0, ['Programming', 2]);

//This example calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.
// activities.forEach(activity => {
//     let percentage = ((activity[1] / 24) * 100).toFixed();
//     activity[2] = percentage + '%';
// });

// console.table(activities)

//To remove an element from an array, you use the pop() or splice() method. The following statement removes the last element of the activities array.

//activities.pop();

// You can remove the elements from the inner array of the multidimensional array by using the pop() method. The following example removes the percentage element from the inner arrays of the activities array.

// activities.forEach((activity) => {
//     activity.pop(2);
// });

//To iterate a multidimensional array, you use a nested for loop
// loop the outer array
// for (let i = 0; i < activities.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = activities[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++) {
//         console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
//     }
// }

//Or you can use the forEach() method twice:
// activities.forEach((activity) => {
//     activity.forEach((data) => {
//         console.log(data);
//     });
// });

// console.table(activities);
