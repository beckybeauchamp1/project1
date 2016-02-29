var game = {

  // It might have be easier to have only one array of trivia objects including both the question, answer, and row choices.
  // For example:

 //   triviaQuestions:[
 //     {
 //       question: "Who was the first person to walk on the moon?",
 //       answer: "Neil Armstrong",
 //       row1: "Louis Armstrong",
 //       row2: "Neil Armstrong",
 //       row3: "Lance Armstrong"
 //     }
 // ]
  triviaQuestions:
  [ "Who was the first person to walk on the moon?",
    "How many bones are in a giraffe's neck?",
    "Which word in the English language has the most definitions?",
    "<em>Fe</em> is the symbol for which element on the periodic table?",
    "Which country has won the most FIFA World Cup championships?",
    "What is on the back of the $100 bill?",
    "<em>The Starry Night</em> is a painting by which famous artist?",
    "Which newspaper publication did Amazon CEO Jeff Bezos purchase in 2013?",
    "Which city was the first to reach a population of one million?",
    "In the <em>Pirates of the Caribbean</em> films, what is the name of Jack Sparrow's ship?" ],

  triviaAnswersRowOne:
  ["Louis Armstrong", "7", "run", "gold", "Germany", "Independence Hall", "Pablo Picasso", "The Washington Post", "London", "The Flying Dutchman"],

  triviaAnswersRowTwo: ["Neil Armstrong", "13", "set", "copper", "Brazil", "The Treasury Building", "Oscar-Claude Monet", "The New York Times", "Rome", "The Dauntless"],

  triviaAnswersRowThree: ["Lance Armstrong", "21", "go", "iron", "Italy", "The White House", "Vincent Van Gogh", "USA Today", "New York City", "The Black Pearl"],

  correctAnswers: ["Neil Armstrong", "7", "set", "iron", "Brazil", "Independence Hall", "Vincent Van Gogh", "The Washington Post", "Rome", "The Black Pearl"],

  chosenAnswers: [],

  optionOne: document.getElementById( "optionOneText"),
  optionTwo: document.getElementById( "optionTwoText"),
  optionThree: document.getElementById( "optionThreeText"),

  playerPick: document.querySelectorAll( ".answer" ),
  playerScore: 0,
  index: 0,

  restart: document.querySelector( "#restartButton" ),


  addQuestion: function() {
    var questionsBox = document.querySelector( ".questions section" );
    var questionsText = this.triviaQuestions[this.index];
    questionsBox.innerHTML = questionsText;
  },
  // These functions look very similar. Could you think of a way to combine these into one?

  //   triviaQuestions:[
  //     {
  //       question: "Who was the first person to walk on the moon?",
  //       answer: "Neil Armstrong",
  //       row1: "Louis Armstrong",
  //       row2: "Neil Armstrong",
  //       row3: "Lance Armstrong"
  //     }
  // ]
    // addAnswers: function(){
    //   var rowOne = this.triviaQuestions[this.index].row1
    //   var rowTwo = this.triviaQuestions[this.index].row2
    //   var rowThree = this.triviaQuestions[this.index].row3
    //
    //   this.optionOne.innerHTML = rowOne;
    //   this.optionOne.innerHTML = rowTwo;
    //   this.optionOne.innerHTML = rowThree;
    // },
  addAnswersRowOne: function() {
    var answerText = this.triviaAnswersRowOne[this.index];
    this.optionOne.innerHTML = answerText;
  },

  addAnswersRowTwo: function() {
    var answerText = this.triviaAnswersRowTwo[this.index];
    this.optionTwo.innerHTML = answerText;
  },

  addAnswersRowThree: function() {
    var answerText = this.triviaAnswersRowThree[this.index];
    this.optionThree.innerHTML = answerText;
  },

  answerClick: function() {
    var self = this;
    // I think you should combine these in one callback funtion with the event listener. For example:

//      for (var i = 0; i < this.playerPick.length; i++) {
//          self.playerPick[i].addEventListener("click", function() {
//            self.chosenAnswers.push(this.innerHTML);
//            self.index++;
//            self.nextQuestion();
//   });
// }
    for (var i = 0; i < this.playerPick.length; i++) {
      this.playerPick[i].addEventListener( "click", function() {
        self.chosenAnswers.push(this.innerHTML); //Pushes player answer to chosenAnswers array
      });
      this.playerPick[i].addEventListener( "click", function() {
        self.index++; //Increases index value by 1
      });
      // this.playerPick[i].addEventListener( "mouseover", function() {
      //   self.playerPick[i].style.background = "#c0c666"; //Changes button color on hover; not working, used css for this effect
      // });
      this.playerPick[i].addEventListener( "click", function() {
        self.nextQuestion(); //Takes player to next question upon answering
      });
    }
  },

  nextQuestion: function() {
    if (this.index <= 9) {
      this.addQuestion();
      this.addAnswersRowOne();
      this.addAnswersRowTwo();
      this.addAnswersRowThree();
    }
    this.showScore();
  },

  getPlayerScore: function() {
    for (var i = 0; i < this.chosenAnswers.length; i++) {
      if (this.chosenAnswers[i] === this.correctAnswers[i]) {
        this.playerScore ++;
      }
    }
  },

  showScore: function () {
    if (this.index === 10) {
      this.getPlayerScore();
      alert("You got " + this.playerScore + " out of 10 correct.");
    }
  },

  playGame: function () {
    this.answerClick();
    this.nextQuestion();
    this.getPlayerScore();
    this.showScore();
    this.restartGame();
  },

  restartGame: function () {
    this.restart.addEventListener( "click", function () {
      location.reload();
    });
  }

};

game.playGame();
