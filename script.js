let storedUser = "231FA04200";
let storedPass = "231FA04200";
let securityAnswer = "blue";
let timeLeft = 600;
let timerInterval;

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === storedUser && pass === storedPass) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("quizPage").classList.remove("hidden");
        startTimer();
    } else {
        alert("Invalid login!");
    }
}

function showResetPassword() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("resetPasswordPage").classList.remove("hidden");
}

function resetPassword() {
    let answer = document.getElementById("securityAnswer").value.toLowerCase();
    if (answer === securityAnswer) {
        storedPass = prompt("Enter new password:");
        alert("Password reset successfully! Go back to login.");
        goBackToLogin();
    } else {
        alert("Incorrect answer!");
    }
}

function goBackToLogin() {
    document.getElementById("resetPasswordPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function startTimer() {
    timerInterval = setInterval(function () {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerText = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    let answers = { q1: "4", q2: "Paris", q3: "Jupiter", q4: "100" };

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    document.getElementById("quizPage").classList.add("hidden");
    setTimeout(() => {
        document.getElementById("resultPage").classList.remove("hidden");
        document.getElementById("score").innerText = "Your score: " + score + "/4";
    }, 5000);
}
