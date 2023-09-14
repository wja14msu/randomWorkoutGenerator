const armWorkouts = ['PUSH UPS!', 'CURLS!', 'SKY PRESS!', 'OVERHEAD TRICEPS', 'SHOULDER FLY!', 'BOX!', 'BENT-OVER ROW!'];
const legWorkouts = ['SQUATS!', 'LUNGES!', 'CALF RAISES!', 'SIDE LUNGES!', 'HEAD KICKS!', 'FRONT-CHOPPING WOOD', 'HIGH KNEES!'];
const coreWorkouts = ['CRUNCHES', 'PLANK!', 'SIDE-CHOPPING WOOD!', 'FRONT-CHOPPING WOOD', 'FLUTTER KICKS', 'SITTING TWISTS', 'STANDING KNEE TO ELBOW!', 'PLANK CRUNCHES!', 'BICYCLE CRUNCHES'];
const allWorkouts = ['ARM CHOPS', 'ARM CHOPS 2', 'BACKFISTS', 'BASIC BURPEES', 'BODY SAW', 'BRIDGES', 'BURPEES', 'BUTT KICKS', 'CALF RAISES', 'CLIMBERS', 'CLIMBER TAPS', 'CLOSE GRIP PUSH UPS', 'CROS CRUNCHES', 'CRUNCHES', 'DONKEY KICKS', 'ELBOW PLANK', 'ELL SIT', 'FLUTTER KICKS', 'FRONT KICKS', 'GET UPS', 'HIGH KNEES', 'HOLLOW HOLD', 'HOOK KICKS', 'HOOKS', 'JUMPING JACKS', 'JUMPING LUNGES', 'JUMPING TEES', 'JUMP KNEE TUCKS', 'JUMP SQUATS', 'KNEED CRUNCHES', 'KNEE STRIKES', 'KNEE TO ELBOW CRUNCHES', 'KNEE TO ELBOWS', 'LEG RAISES', 'LUNGES', 'LUNGE STEUP UPS', 'MARCH STEPS', 'OVERHEAD PUNCHES', 'PIKE PUSH UPS', 'PLANK JACKS', 'PLANK JUMP INS', 'PLANK LEG RAISES', 'PLANK ROTATIONS', 'PLANK WALK OUTS', 'PUNCHES', 'PUSH UPS', 'RAISED LEG HOLD', 'RAISED LEG PUSH UPS', 'REVERSE CRUNCHES', 'SEAL JACKS', 'SHOULDER TAPS', 'SHRIMP SQUATS', 'SIDE BRIDGES', 'SIDE ELBOW PLANK', 'SIDE KICKS', 'SIDE LEG RAISES', 'SIDE TO SIDE LUNGES', 'SINGLE LEG BRIDGES', 'SITTING TWISTS', 'SIT UPS', 'SLOW CLIMBERS', 'SPLIT JACKS', 'SQUAT HOLD PUNCHES', 'SQUATS', 'TRICEP EXTENSIONS', 'UPPERCUTS', 'V UPS', 'WALL SIT'];

const timerDisplay = document.getElementById('timerDisplay');
const roundCountDisplay = document.getElementById('roundCountDisplay');
const workoutDisplay = document.getElementById('workout-display');

function updateTime() {
    const timeContainer = document.getElementById("time-container");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Format the time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Update the content of the div
    timeContainer.textContent = "Current Time: " + formattedTime;
}
// Call updateTime function to initially display the time
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

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

document.getElementById('random').addEventListener('click', () => {
  startTimerAbs(45);
  generateWorkout(allWorkouts);
  
})

// Function to handle the timer
function startTimerRandom(totalTime) {
    let remainingTime = totalTime;

    const interval = setInterval(() => {
        timerDisplay.textContent = `Timer: ${formatTime(remainingTime)}`;
        remainingTime--;
        
        roundCountDisplay.textContent = `Round Count: ${roundCount}`
        if (remainingTime < 0) {
            clearInterval(interval);

            if (totalTime === 45) {
                startTimerRandom(15);
                generateWorkout(allWorkouts);
            } else {
                startTimerRandom(45);
                roundCount++;
            }
        } 
    }, 1000);
}