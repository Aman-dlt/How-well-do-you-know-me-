var readlinesync = require('readline-sync')
score=0;
 function welcome()
 {
   var username= readlinesync.question("what is your name ")
  console.log("Hey " +username+" welcome to the game")
  console.log("lets start")
  console.log("-----------------")
 }
 function quiz(question, optionone, optiontwo, optionthree, optionfour,answer) {
   console.log(question+"\n"+optionone+"\n" +optiontwo+"\n" +optionthree)
 var result = readlinesync.question(optionfour);
  
   if(result==answer)
   {
     console.log("you were right");
     score = score+1;
     console.log("score is :"+score);
     console.log("----------");
   }
   else
   {
     console.log("you were wrong");
     score= score-0.5;
    console.log("score is ;"+score);
     console.log("----------");
   }
 }
var questions=[{
   question:"Which is my favorite color ?",
   optionone:"a.Red",
   optiontwo:"b.Black",
   optionthree:"c.Blue",
   optionfour:"your answer is:",
   answerz: "b",
  
 }, {
   question:"Which is my favorite food ?",
   optionone:"a.Pav Bhaji",
   optiontwo:"b.frankie",
   optionthree:"c.Aloo paratha",
   optionfour:"your answer is:",
   answerz:"a",
   
},{
  question:"Which is my birthday in? ",
  optionone:"a.May",
   optiontwo:"a.June",
   optionthree:"c.August",
   optionfour:"your answer is:",
   answerz:"c",
   
},{
  question:"What is my favorite pastime? :",
  optionone:"a.Reading",
   optiontwo:"b.Listening to music",
   optionthree:"c.Playing Games",
   optionfour:"your answer is:",
   answerz:"a",
 
},{
  question:"What is my favorite place to visit? :",
  optionone:"a.literally anywhere New",
   optiontwo:"b.Beaches",
   optionthree:"c.beautiful buildings",
   optionfour:"your answer is:",
   answerz:"b",
 
}];
function game() {
for( var i=0;i<questions.length;i++)
 {
   var currentQuestion = questions[i];
 quiz(currentQuestion.question,currentQuestion.optionone,currentQuestion.optiontwo,currentQuestion.optionthree,currentQuestion.optionfour,currentQuestion.answerz)
 }
}
function finalscore() {
{ if (score<3){
  console.log("Your score is "+score+" you don't know me that well:(");
}
else{
  console.log("YaY your score is "+score+" You know me well:-)")
}
}
}
welcome();
 game();
 finalscore();


