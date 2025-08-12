var questions = [
  {
    question: "Who is the current Prime Minister of Pakistan in 2025?",
    options: ["Shehbaz Sharif", "Imran Khan", "Bilawal Bhutto", "Anwaar-ul-Haq Kakar"],
    correctAnswer: "Shehbaz Sharif"
  },
  {
    question: "Who is the current President of Pakistan?",
    options: ["Arif Alvi", "Asif Zardari", "Mamnoon Hussain", "Wasim Sajjad"],
    correctAnswer: "Asif Zardari"
  },
  {
    question: "Which party won the most seats in the 2025 General Elections?",
    options: ["PTI", "PML-N", "PPP", "MQM"],
    correctAnswer: "PML-N"
  },
  {
    question: "Who is the current Chief Minister of Punjab (2025)?",
    options: ["Maryam Nawaz", "Usman Buzdar", "Hamza Shehbaz", "Chaudhry Pervaiz Elahi"],
    correctAnswer: "Maryam Nawaz"
  },
  {
    question: "Who is the current Foreign Minister of Pakistan?",
    options: ["Bilawal Bhutto", "Ishaq Dar", "Sherry Rehman", "Hina Rabbani Khar"],
    correctAnswer: "Bilawal Bhutto"
  },
  {
    question: "Who is the current Chief of Army Staff (COAS) in 2025?",
    options: ["Asim Munir", "Qamar Javed Bajwa", "Raheel Sharif", "Ashfaq Parvez Kayani"],
    correctAnswer: "Asim Munir"
  },
  {
    question: "Where is the Parliament of Pakistan located?",
    options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
    correctAnswer: "Islamabad"
  },
  {
    question: "Which is the upper house of Pakistan's Parliament?",
    options: ["National Assembly", "Senate", "Provincial Assembly", "Judiciary"],
    correctAnswer: "Senate"
  },
  {
    question: "Who appoints the Chief Justice of Pakistan?",
    options: ["Prime Minister", "President", "Senate", "Supreme Court"],
    correctAnswer: "President"
  },
  {
    question: "What is the term duration of the National Assembly in Pakistan?",
    options: ["3 years", "4 years", "5 years", "6 years"],
    correctAnswer: "5 years"
  },
  {
    question: "What is the minimum age to become a member of the National Assembly?",
    options: ["18 years", "21 years", "25 years", "30 years"],
    correctAnswer: "25 years"
  },
  {
    question: "Which article of the Constitution of Pakistan deals with fundamental rights?",
    options: ["Article 199", "Article 8 to 28", "Article 63", "Article 184"],
    correctAnswer: "Article 8 to 28"
  },
  {
    question: "Which city is the capital of Balochistan?",
    options: ["Quetta", "Gwadar", "Turbat", "Sibi"],
    correctAnswer: "Quetta"
  },
  {
    question: "What is the name of the current Governor of Sindh (2025)?",
    options: ["Kamran Tessori", "Murad Ali Shah", "Dr. Ishrat-ul-Ibad", "Qaim Ali Shah"],
    correctAnswer: "Kamran Tessori"
  },
  {
    question: "Which institution oversees elections in Pakistan?",
    options: ["Supreme Court", "Senate", "ECP", "FBR"],
    correctAnswer: "ECP"
  },
  {
    question: "Who is the current Chief Minister of Sindh?",
    options: ["Murad Ali Shah", "Qaim Ali Shah", "Faryal Talpur", "Sharjeel Memon"],
    correctAnswer: "Murad Ali Shah"
  },
  {
    question: "Which article of the Constitution allows the President to dissolve the National Assembly?",
    options: ["Article 58(2)(b)", "Article 62", "Article 70", "Article 9"],
    correctAnswer: "Article 58(2)(b)"
  },
  {
    question: "Who was the first female Prime Minister of Pakistan?",
    options: ["Fatima Jinnah", "Benazir Bhutto", "Hina Rabbani Khar", "Maryam Nawaz"],
    correctAnswer: "Benazir Bhutto"
  },
  {
    question: "How many members are there in the Senate of Pakistan?",
    options: ["100", "104", "110", "120"],
    correctAnswer: "100"
  },
  {
    question: "Who is responsible for passing the annual budget in Pakistan?",
    options: ["Supreme Court", "National Assembly", "Senate", "President"],
    correctAnswer: "National Assembly"
  },
  {
    question: "When was the Constitution of Pakistan enforced?",
    options: ["14 August 1947", "23 March 1956", "8 June 1962", "14 August 1973"],
    correctAnswer: "14 August 1973"
  },
  {
    question: "Which court is the highest in Pakistan?",
    options: ["High Court", "Federal Shariat Court", "Supreme Court", "Civil Court"],
    correctAnswer: "Supreme Court"
  },
  {
    question: "Who was the founder of Pakistan People's Party (PPP)?",
    options: ["Benazir Bhutto", "Zulfiqar Ali Bhutto", "Asif Zardari", "Bilawal Bhutto"],
    correctAnswer: "Zulfiqar Ali Bhutto"
  },
  {
    question: "Who is the current Information Minister of Pakistan?",
    options: ["Marriyum Aurangzeb", "Shibli Faraz", "Fawad Chaudhry", "Attaullah Tarar"],
    correctAnswer: "Attaullah Tarar"
  },
  {
    question: "What is the total number of provinces in Pakistan?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    options: ["Sindh", "Punjab", "Balochistan", "KPK"],
    correctAnswer: "Balochistan"
  },
  {
    question: "Which house has more power in financial matters?",
    options: ["Senate", "National Assembly", "Judiciary", "Executive"],
    correctAnswer: "National Assembly"
  },
  {
    question: "How many seats are reserved for women in the National Assembly?",
    options: ["50", "60", "70", "80"],
    correctAnswer: "60"
  },
  {
    question: "Who is the current Speaker of the National Assembly (2025)?",
    options: ["Raja Pervaiz Ashraf", "Ayaz Sadiq", "Asad Qaiser", "Sardar Ayaz"],
    correctAnswer: "Ayaz Sadiq"
  },
  {
    question: "Which is the highest civilian award in Pakistan?",
    options: ["Nishan-e-Haider", "Tamgha-e-Shujaat", "Sitara-e-Imtiaz", "Nishan-e-Pakistan"],
    correctAnswer: "Nishan-e-Pakistan"
  }
];


var currentQuestion = 0;
var score = 0;
var quizContainer = document.getElementById("quiz-container");
var questionText = document.getElementById("question");
var optionsContainer = document.getElementById("options");
var nextBtn = document.getElementById("next-btn");
var startbtn = document.getElementById("start");
var timer = document.getElementById("timer");
var result = document.getElementById("result");
var totalquestion = 30;

function startQuiz() {
    quizContainer.style.display = "block";
    startbtn.style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
    startTimer();
};

function startTimer() {
  var time = 900;
  var timerInterval = setInterval(() => {
    timer.innerHTML = `Time Left : ${Math.floor(time / 60)}m ${time % 60}s`;
    if (time > 0) {
      time--;
    } else {
      clearInterval(timerInterval);
      alert("time Out");
    }
  }, 1000);
};

  function showQuestion() {
  var q = questions[currentQuestion];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  for (var i = 0; i < q.options.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = q.options[i];
    btn.className = "option-btn";
    btn.setAttribute("onclick", "checkAnswer(this)");
    optionsContainer.appendChild(btn);
  }
};

function checkAnswer(selectedBtn) {
  var selected = selectedBtn.textContent;
  var correct = questions[currentQuestion].correctAnswer;

  if (selected === correct) {
    score++;
    selectedBtn.style.backgroundColor = "green";
    selectedBtn.style.color = "White";
  } else {
    selectedBtn.style.backgroundColor = "red";
    selectedBtn.style.color = "White"   
  }

  var allOptions = document.getElementsByClassName("option-btn");
  for (var i = 0; i < allOptions.length; i++) {
    allOptions[i].disabled = true;
  }
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.style.display = "none";
  result.style.display = "block";
  var percentage = (score / totalquestion) * 100;
  result.innerHTML = `Quiz Finished <br> Your score: ${score}   out of  ${questions.length} <br> Percentage : ${percentage}%`;
}
