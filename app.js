// const firebaseConfig = {
//   apiKey: "AIzaSyCbDvpO0Rx7wF716Ew13dspRRHz1XGvReo",
//   authDomain: "quiz-app-9d5ae.firebaseapp.com",
//   projectId: "quiz-app-9d5ae",
//   storageBucket: "quiz-app-9d5ae.firebasestorage.app",
//   messagingSenderId: "763480638169",
//   appId: "1:763480638169:web:d93e4a1b79bc9df3c534c8"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);






var questions = [
    {
      question: "Q1: HTML Stands for?",
      option1: "1. Hyper Text Markup Language",
      option2: "2. Hyper Tech Markup Language",
      option3: "3. Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "CSS Stands for",
      option1: "1. Cascoding Style Sheets",
      option2: "2. Cascading Style Sheets",
      option3: "3. Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used for most large heading",
      option1: "1. <h6>",
      option2: "2. <h2>",
      option3: "3. <h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Which tag is used to make element unique ",
      option1: "1. id",
      option2: "2. class  ",
      option3: "3. label",
      corrAnswer: "id",
    },
    {
      question: "Any element assigned with id, can be get in css ",
      option1: "1. by # tag",
      option2: "2. by @ tag",
      option3: "3. by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "CSS can be used with ______ methods ",
      option1: "1. 8",
      option2: "2. 3",
      option3: "3. 4",
      corrAnswer: "3",
    },
    {
      question: "In JS variable types are ____________ ",
      option1: "1. 6",
      option2: "2. 3",
      option3: "3. 8",
      corrAnswer: "8",
    },
    {
      question: "In array we can use key name and value ",
      option1: "1. True",
      option2: "2. False",
      option3: "3. None of above",
      corrAnswer: "False",
    },
    {
      question: "toFixed() is used to define length of decimal ",
      option1: "1. True",
      option2: "2. False",
      option3: "3. None of above",
      corrAnswer: "True",
    },
    {
      question: "push() method is used to add element in the start of array ",
      option1: "1. True",
      option2: "2. False",
      option3: "3. None of above",
      corrAnswer: "False",
    },
  ];

  const firebaseConfig = {
  apiKey: "AIzaSyCbDvpO0Rx7wF716Ew13dspRRHz1XGvReo",
  authDomain: "quiz-app-9d5ae.firebaseapp.com",
  projectId: "quiz-app-9d5ae",
  storageBucket: "quiz-app-9d5ae.firebasestorage.app",
  messagingSenderId: "763480638169",
  appId: "1:763480638169:web:d93e4a1b79bc9df3c534c8"
};

// Initialize Firebase
// var app = firebase.initializeApp(firebaseConfig);
// var db = firebase.database();



  var button = document.getElementById("btn");
  var question = document.getElementById("ques");
  var option1 = document.getElementById("opt1");
  var option2 = document.getElementById("opt2");
  var option3 = document.getElementById("opt3");
  var index = 0;
  var score = 0;
  var sec = 59;
  var min = 1;
  
//   var timerElement = document.getElementById("timer");
  
//   function timer() {
//     timerElement.innerText = `${min}:${sec}`;
//     sec--;
//     if (sec < 0) {
//       min--;
//       sec = 59;
  
//       if (min < 0) {
//         min = 1;
//         sec = 59;
//         nextQuestion();
//       }
//     }
//   }
  
//   setInterval(timer, 100);
  
  function nextQuestion() {
    var options = document.getElementsByClassName("options");
  
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selectedOption = options[i].value;
        var getOption = questions[index - 1][`option${selectedOption}`];
        var corrAnswer = questions[index - 1]["corrAnswer"];
  
        if (getOption === corrAnswer) {
          score++;
        }
  
        console.log(getOption);
      }
  
      options[i].checked = false;
    }
    button.disabled = true;
  
    if (index > questions.length - 1) {
      Swal.fire({
        title: "Good job!",
        text: `Your score is ${((score / questions.length) * 100).toFixed(2)}`,
        icon: "success",
      });
    } else {
      question.innerText = questions[index].question;
      option1.innerText = questions[index].option1;
      option2.innerText = questions[index].option2;
      option3.innerText = questions[index].option3;
      index++;
    }
  }
  
  function clicked() {
    button.disabled = false;
  }