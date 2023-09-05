const armWorkouts = ['PUSH UPS!', 'CURLS!', 'SKY PRESS!', 'OVERHEAD TRICEPS', 'SHOULDER FLY!', 'BOX!', 'BENT-OVER ROW!'];
const legWorkouts = ['SQUATS!', 'LUNGES!', 'CALF RAISES!', 'SIDE LUNGES!', 'HEAD KICKS!', 'FRONT-CHOPPING WOOD', 'HIGH KNEES!'];
const coreWorkouts = ['CRUNCHES', 'PLANK!', 'SIDE-CHOPPING WOOD!', 'FRONT-CHOPPING WOOD', 'FLUTTER KICKS', 'SITTING TWISTS', 'STANDING KNEE TO ELBOW!', 'PLANK CRUNCHES!', 'BICYCLE CRUNCHES', '']
const timerDisplay = document.getElementById('timerDisplay');
const roundCountDisplay = document.getElementById('roundCountDisplay');
const workoutDisplay = document.getElementById('workout-display');

function generateWorkout(bodySection) {
    const randomIndex = Math.floor(Math.random() * bodySection.length);
    workoutDisplay.textContent = bodySection[randomIndex];
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


let roundCount = 1;

document.getElementById('arms').addEventListener('click', () => {
  startTimerArms(45);
  generateWorkout(armWorkouts);
  
})

// Function to handle the timer
function startTimerArms(totalTime) {
    let remainingTime = totalTime;

    const interval = setInterval(() => {
        timerDisplay.textContent = `Timer: ${formatTime(remainingTime)}`;
        remainingTime--;
        
        roundCountDisplay.textContent = `Round Count: ${roundCount}`
        if (remainingTime < 0) {
            clearInterval(interval);

            if (totalTime === 45) {
                startTimerArms(15);
                generateWorkout(armWorkouts);
            } else {
                startTimerArms(45);
                roundCount++;
            }
        } 
    }, 1000);
}

document.getElementById('legs').addEventListener('click', () => {
  startTimerlegs(45);
  generateWorkout(legWorkouts);
  
})

// Function to handle the timer
function startTimerlegs(totalTime) {
    let remainingTime = totalTime;

    const interval = setInterval(() => {
        timerDisplay.textContent = `Timer: ${formatTime(remainingTime)}`;
        remainingTime--;
        
        roundCountDisplay.textContent = `Round Count: ${roundCount}`
        if (remainingTime < 0) {
            clearInterval(interval);

            if (totalTime === 45) {
                startTimerlegs(15);
                generateWorkout(legWorkouts);
            } else {
                startTimerlegs(45);
                roundCount++;
            }
        } 
    }, 1000);
}

document.getElementById('abs').addEventListener('click', () => {
  startTimerAbs(45);
  generateWorkout(coreWorkouts);
  
})

// Function to handle the timer
function startTimerAbs(totalTime) {
    let remainingTime = totalTime;

    const interval = setInterval(() => {
        timerDisplay.textContent = `Timer: ${formatTime(remainingTime)}`;
        remainingTime--;
        
        roundCountDisplay.textContent = `Round Count: ${roundCount}`
        if (remainingTime < 0) {
            clearInterval(interval);

            if (totalTime === 45) {
                startTimerAbs(15);
                generateWorkout(coreWorkouts);
            } else {
                startTimerAbs(45);
                roundCount++;
            }
        } 
    }, 1000);
}