document.addEventListener('DOMContentLoaded', function() {
    let team1Score = 0;
    let team2Score = 0;
    let timerInterval;
    let isTimerRunning = false;
    let seconds = 0;
    let minutes = 0;

    const team1AddButton = document.getElementById('team1-add-button');
    const team1SubtractButton = document.getElementById('team1-subtract-button');
    const team2AddButton = document.getElementById('team2-add-button');
    const team2SubtractButton = document.getElementById('team2-subtract-button');
    const team1ScoreDisplay = document.getElementById('team1-score');
    const team2ScoreDisplay = document.getElementById('team2-score');
    const timerDisplay = document.getElementById('timer-display');
    const startStopButton = document.getElementById('start-stop-button');

    team1AddButton.addEventListener('click', function() {
        team1Score++;
        team1ScoreDisplay.textContent = team1Score;
    });

    team1SubtractButton.addEventListener('click', function() {
        if (team1Score > 0) {
            team1Score--;
        }
        team1ScoreDisplay.textContent = team1Score;
    });

    team2AddButton.addEventListener('click', function() {
        team2Score++;
        team2ScoreDisplay.textContent = team2Score;
    });

    team2SubtractButton.addEventListener('click', function() {
        if (team2Score > 0) {
            team2Score--;
        }
        team2ScoreDisplay.textContent = team2Score;
    });

    startStopButton.addEventListener('click', function() {
        if (isTimerRunning) {
            clearInterval(timerInterval);
            startStopButton.textContent = 'Start';
        } else {
            timerInterval = setInterval(updateTimer, 1000);
            startStopButton.textContent = 'Stop';
        }
        isTimerRunning = !isTimerRunning;
    });

    function updateTimer() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        timerDisplay.textContent = 
            (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (seconds < 10 ? '0' + seconds : seconds);
    }
});

