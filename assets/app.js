
var card = $("#quiz-area");

// Question set
var questions = [{
  question: "What is the name of the main character in Star-Wars a New Hope",
  answers: ["  Luke Skywalker  ", "  Obi-Wan  ", "  Princess Keia  ", "  Han Solo  "],
  correctAnswer: "  Luke Skywalker  "
}, {
  question: "What color pill does Neo take in the Matrix?",
  answers: ["  Blue  ", "  Green  ", "  Yellow  ", "  Red  "],
  correctAnswer: "  Red  "
}, {
  question: "Which actor hasn't played the Joker?",
  answers: ["  Jack Nicholson  ", "  Heith Ledger  ", "  Mark Hamil  ", "  Tom Hiddleston  "],
  correctAnswer: "  Tom Hiddleston  "
}, {
  question: "Who is not a member of the orignal Avengers?",
  answers: ["  Iron Man  ", "  Wolverine  ", "  Captain America  ", "  Thor  "],
  correctAnswer: "  Wolverine  "
}, {
  question: "Who directed the film The Royal Tenenbaums",
  answers: ["  George Lucas  ", "  Ron Howard  ", "  Christopher Nolan  ", "  Wes Anderson  "],
  correctAnswer: "  Wes Anderson  "
}, {
  question: "Finish this line from Ferris Buler's day off: \"Life moves pretty fast If you don't stop and look...\"",
  answers: ["  To your family once in a while you could miss out  ", "  Up you might miss it  ", "  Around once in a while you might miss it  ", "  at an 80's movie you might not have had a good childhood  "],
  correctAnswer: "  Around once in a while you might miss it  "
}, {
  question: "What is the name of the main characters of Toy Story?",
  answers: ["  Buzz and Woody  ", "  John and Frank  ", "  Mr potato head and Ham  ", "  Katniss and Peta  "],
  correctAnswer: "  Buzz and Woody  "
}, {
  question: "What kind of car is used in the Dukes of Hazzard?",
  answers: ["  Dodge Challenger  ", "  Chevy Camaro  ", "  Dodge Charger  ", "  Ford Mustang  "],
  correctAnswer: "  Dodge Charger  "
}];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 130,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>130</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});