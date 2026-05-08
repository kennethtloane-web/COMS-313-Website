// LOAD SHEDDING ADVICE
const stageSelect = document.getElementById("stage");
const adviceText = document.getElementById("advice");

if (stageSelect) {
    stageSelect.addEventListener("change", function () {

        const stage = stageSelect.value;

        if (stage === "1") {
            adviceText.textContent = "Stage 1: Study normally and keep devices charged.";
        }
        else if (stage === "2") {
            adviceText.textContent = "Stage 2: Download notes and prepare offline study material.";
        }
        else if (stage === "3") {
            adviceText.textContent = "Stage 3: Prioritise daytime studying and save battery power.";
        }
        else if (stage === "4") {
            adviceText.textContent = "Stage 4+: Visit campus study spaces with backup power.";
        }
        else {
            adviceText.textContent = "Study advice will appear here.";
        }
    });
}

// DARK MODE
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

// STUDY TIMER
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let time = 1500;
let timer;

function updateTimer() {

    if (timerDisplay) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        timerDisplay.textContent =
            `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
}

if (startBtn) {
    startBtn.addEventListener("click", function () {

        clearInterval(timer);

        timer = setInterval(function () {

            if (time > 0) {
                time--;
                updateTimer();
            }
            else {
                clearInterval(timer);
                alert("Study session complete! Take a break.");
            }

        }, 1000);
    });
}

if (resetBtn) {
    resetBtn.addEventListener("click", function () {

        clearInterval(timer);
        time = 1500;
        updateTimer();
    });
}

updateTimer();

// TASK PLANNER
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if (addTaskBtn) {

    addTaskBtn.addEventListener("click", function () {

        const task = taskInput.value.trim();

        if (task === "") {
            alert("Please enter a study task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = task;

        li.addEventListener("click", function () {
            li.style.textDecoration = "line-through";
        });

        taskList.appendChild(li);

        taskInput.value = "";
    });
}

// RANDOM STUDY TIPS
const tips = [
    "Study in short focused sessions.",
    "Keep your phone away while studying.",
    "Use active recall for better memory.",
    "Take short breaks every 25 minutes.",
    "Download notes before load shedding starts."
];

const tipBtn = document.querySelector(".tip-btn");
const tipText = document.getElementById("tipText");

if (tipBtn) {

    tipBtn.addEventListener("click", function () {

        const randomIndex = Math.floor(Math.random() * tips.length);
        tipText.textContent = tips[randomIndex];
    });
}
