function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

  if (question1 == "rages") {
    correct++;
  }
  if (question2 == "jargon") {
    correct++;
  }
  if (question3 == "taciturn") {
    correct++;
  }
  if (question4 == "teeming with") {
    correct++;
  }
  if (question5 == "choleric") {
    correct++;
  }

  var messages = ["Good Job", "That's Okay", "You need to do better"];
  var pictures = ["img/good-job.gif", "img/okay.gif", "img/do-better.gif"];

  var range = 0;
  if (correct < 1) {
    range = 2;
  }

  if (correct > 0 && correct < 3) {
    range = 1;
  }

  if (correct > 3) {
    range = 0;
  }

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[range];
}
