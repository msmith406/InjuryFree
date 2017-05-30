// scripts here:

function submitQuiz() {
  console.log('submitted');

  // get each answer score
  function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  // calc score with answerScore function
  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
  console.log("CalcScore: " + calcScore); // it works!

  // function to return correct answer string
  function correctAnswer(correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
    return ("Based on your answer for question " + qNumber + ": &nbsp;<strong>" +
      (correctStringNo) + "</strong><br>");
  }

  function hamstring()
  {
    var img = new Image();
    var div = document.getElementById('correctAnswer1');
    img.onload = function () {
      div.appendChild(img);
    };
    img.src = 'hamstring.jpg';
  }

  function hipflexor1()
  {
    var img = new Image();
    var div = document.getElementById('correctAnswer2');
    img.onload = function () {
      div.appendChild(img);
    };
    img.src = 'hipflexor.png';
  }

  function hipflexor2() {
    var img = new Image();
    var div = document.getElementById('correctAnswer2');
    img.onload = function () {
      div.appendChild(img);
    };
    img.src = 'hipflexor2.jpg';
  }

  function solveQ1()
  {
    if (answerScore('q1') === 3) {
      document.getElementById('correctAnswer1').innerHTML = correctAnswer('You do not need to add additional hamstring stretches to your routine', 1);
    }
    else if (answerScore('q1') === 2) {
      document.getElementById('correctAnswer1').innerHTML = correctAnswer('Make sure that you are stretching your hamstrings before and after every workout.', 1);
    }
    else if (answerScore('q1') === 1) {
      document.getElementById('correctAnswer1').innerHTML = correctAnswer('Add this exercise to your daily routine. 3x20sec hold each leg. </strong><br>' +
        'You can use a towel or sheet if you do not have an exercise band or strap. <strong>', 1);
      hamstring();
    } else {
      document.getElementById('correctAnswer1').innerHTML = correctAnswer('Add this exercise to your daily routine. 5x20sec hold each leg. </strong><br>' +
        'You can use a towel or sheet if you do not have an exercise band or strap. <strong>', 1);
      hamstring();
    }
  }

  function solveQ2()
  {
    if (answerScore('q2') === 3) {
      document.getElementById('correctAnswer2').innerHTML = correctAnswer('You do not need to add additional hip flexor stretches to your routine', 2);
    }
    else if (answerScore('q2') === 2) {
      document.getElementById('correctAnswer2').innerHTML = correctAnswer('Do this stretch everyday. Hold 3x20 seconds each leg.', 2);
      hipflexor1();
    }
    else if (answerScore('q2') === 1) {
      document.getElementById('correctAnswer2').innerHTML = correctAnswer('Add these exercises to your daily routine. 3x20sec hold each leg for each exercise.', 2);
      hipflexor1();
      hipflexor2();
    } else {
      document.getElementById('correctAnswer2').innerHTML = correctAnswer('Add these exercises to your daily routine. 5x20sec hold each leg for each exercise.', 2);
      hipflexor1();
      hipflexor2();
    }
  }

  // print correct answers only if wrong (calls correctAnswer function)
  solveQ1();
  solveQ2();
  
  if (answerScore('q3') === 0) {
    document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
  }
  if (answerScore('q4') === 0) {
    document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
  }

  // calculate "possible score" integer
  var questionCountArray = document.getElementsByClassName('question');

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }

  // show score as "score/possible score"
  var showScore = "Your Score: " + calcScore + "/" + questionCounter*3;
  // if 4/4, "perfect score!"
  if (calcScore === questionCounter*3) {
    showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
  };
  if (calcScore >= 8)
  {
    showStrength();
  }
  document.getElementById('userScore').innerHTML = showScore;
}
function hideStrength()
{
  document.getElementById("strengthButton").style.visibility = "hidden";
  document.getElementById("moveOn").style.visibility = "hidden";
}
function showStrength()
{
  document.getElementById("strengthButton").style.visibility = "visible";
  document.getElementById("moveOn").style.visibility = "visible";
}
$(document).ready(function () {

  $('#submitButton').click(function () {
    $(this).addClass('hide');
  });

});
