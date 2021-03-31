// 1. Create a multidimensional array to hold quiz questions and answers


// 2. Store the number of questions answered correctly


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/


// 4. Display the number of correct answers to the user

const questions = [
  ['How many lines are in the sea?', '1'],
  ['At max effort, can you breathe?', 'no'],
  ['Sticking your nose, makes you what?', 'sticky']
];

let message;
let counter = 0;
for (let i = 0; i<questions.length; i++){
  let answer = prompt(questions[i][0]);
 
  
  if (!answer){
    message = prompt(`please respond`);
    /*do {
      let answer = prompt(questions[i][0]);
    }while(answer === null);*/
  }
   else if (answer === questions[i][1]){
    console.log (`correct`);
    counter++;
  } else {
    console.log (`wrong`);
  }
}
document.querySelector('main').innerHTML = `you got ${counter} correct`;