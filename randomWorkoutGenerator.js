const armWorkouts = ['PUSH UPS!', 'CURLS!', 'SKY PRESS!', 'OVERHEAD TRICEPS', 'SHOULDER FLY!', 'BOX!', 'BENT-OVER ROW!'];
const legWorkouts = ['SQUATS!', 'LUNGES!', 'CALF RAISES!', 'SIDE LUNGES!', 'HEAD KICKS!', 'FRONT-CHOPPING WOOD', 'HIGH KNEES!'];
const coreWorkouts = ['CRUNCHES', 'PLANK!', 'SIDE-CHOPPING WOOD!', 'FRONT-CHOPPING WOOD', 'FLUTTER KICKS', 'SITTING TWISTS', 'STANDING KNEE TO ELBOW!', 'PLANK CRUNCHES!', 'BICYCLE CRUNCHES', '']

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


let roundCount = 1;

// Function to handle the timer
function startTimer(totalTime) {
    let remainingTime = totalTime;

    const timerDisplay = document.getElementById('timerDisplay');
    const roundCountDisplay = document.getElementById('roundCountDisplay');

    const interval = setInterval(() => {
        timerDisplay.textContent = `Timer: ${formatTime(remainingTime)}`;
        remainingTime--;
        
        roundCountDisplay.textContent = `Round Count: ${roundCount}`
        if (remainingTime < 0) {
            clearInterval(interval);

            if (totalTime === 45) {
                startTimer(15);
            } else {
                startTimer(45);
                roundCount++;
            }
        } 
    }, 1000);
}

function reset() {

}

// Start the timer when the button is clicked
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    startTimer(45); // start with a 45-second timer
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    roundCount = 1;
})

function armGenerator() {
    const armGeneratorDiv = document.getElementById('arms');
    armGeneratorDiv.addEventListener('click', () => {
        armGeneratorDiv.style.color = 'red';
    })
}

function abGenerator() {

}

function legGenerator() {
    
}