var game = {
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

  next: document.querySelector( "#nextButton"),
  restart: document.querySelector( "#restartButton" ),

  addQuestion: function() {
    var questionsBox = document.querySelector( ".questions section" );
    var questionsText = this.triviaQuestions[this.index];
    questionsBox.innerHTML = questionsText;
  },

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
    for (var i = 0; i < this.playerPick.length; i++) {
      this.playerPick[i].addEventListener( "click", function() {
        self.chosenAnswers.push(this.innerHTML); //Pushes player answer to chosenAnswers array
      });
      this.playerPick[i].addEventListener( "click", function() {
        self.index++; //Increases index value by 1
      });
    }
    // this.next.addEventListener( "click", function() {
    //   self.nextQuestion();
    // }); //Takes player to next question using 'Next' button
  },

  answerFeedback: function() {
    //var self = this;
    for (var i = 0; i < this.playerPick.length; i++) {
      if (this.chosenAnswers[i] === this.correctAnswers[i]) {
        this.playerPick[i].addEventListener( "click", function () {
          this.style.background = "#aacd6e";
          });
      } else if ( this.chosenAnswers[i] !== this.correctAnswers[i]) {
          this.playerPick[i].addEventListener( "click", function () {
            this.style.background = "#f16b6f";
            });
        }
    }
    this.answerClick();
  },

  nextButton: function () {
    this.next.addEventListener( "click", function() {
      this.nextQuestion();
    }); //Takes player to next question using 'Next' button
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
    //this.answerClick();
    this.answerFeedback();
    this.nextQuestion();
    this.getPlayerScore();
    this.showScore();
    this.nextButton();
    this.restartGame();
  },

  restartGame: function () {
    this.restart.addEventListener( "click", function () {
      location.reload();
    });
  }

};

game.playGame();
