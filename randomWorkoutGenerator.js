const armWorkouts = ['ARM CHOPS', 'ARM CHOPS 2', 'BACKFISTS', 'CLOSE GRIP PUSH UPS', 'HOOKS', 'OVERHEAD PUNCHES', 'PIKE PUSH UPS', 'PUNCHES', 'PUSH UPS', 'RAISED LEG PUSH UPS', 'TRICEP EXTENSIONS', 'UPPERCUTS'];
const legWorkouts = ['BRIDGES', 'BUTT KICKS', 'CALF RAISES', 'DONKEY KICKS', 'FRONT KICKS', 'HIGH KNEES', 'HOOK KICKS', 'JUMPING LUNGES', 'JUMP KNEE TUCKS', 'JUMP SQUATS', 'KNEE STRIKES', 'LUNGES', 'LUNGE STEP UPS', 'MARCH STEPS', 'SHRIMP SQUATS', 'SIDE KICKS', 'SIDE LEG RAISES', 'SIDE TO SIDE LUNGES', 'SINGLE LEG BRIDGES', 'SQUAT HOLD PUNCHES', 'SQUATS', 'WALL SIT'];
const coreWorkouts = ['CLIMBERS', 'CLIMBER TAPS', 'CROSS CRUNCHES', 'CRUNCHES', 'ELBOW PLANK', 'L SIT', 'FLUTTER KICKS', 'HOLLOW HOLD', 'KNEE CRUNCHES', 'KNEE TO ELBOW CRUNCHES', 'KNEE TO ELBOWS', 'LEG RAISES', 'PLANK JACKS', 'PLANK JUMP INS', 'PLANK LEG RAISES', 'PLANK ROTATIONS', 'PLANK WALK OUTS', 'RAISED LEG HOLD', 'REVERSE CRUNCHES', 'SHOULDER TAPS', 'SIDE BRIDGES', 'SIDE ELBOW PLANK', 'SITTING TWISTS', 'SIT UPS', 'SLOW CLIMBERS', 'V UPS'];
const allWorkouts = ['ARM CHOPS', 'ARM CHOPS 2', 'BACKFISTS', 'BASIC BURPEES', 'BODY SAW', 'BRIDGES', 'BURPEES', 'BUTT KICKS', 'CALF RAISES', 'CLIMBERS', 'CLIMBER TAPS', 'CLOSE GRIP PUSH UPS', 'CROSS CRUNCHES', 'CRUNCHES', 'DONKEY KICKS', 'ELBOW PLANK', 'L SIT', 'FLUTTER KICKS', 'FRONT KICKS', 'GET UPS', 'HIGH KNEES', 'HOLLOW HOLD', 'HOOK KICKS', 'HOOKS', 'JUMPING JACKS', 'JUMPING LUNGES', 'JUMPING TEES', 'JUMP KNEE TUCKS', 'JUMP SQUATS', 'KNEE CRUNCHES', 'KNEE STRIKES', 'KNEE TO ELBOW CRUNCHES', 'KNEE TO ELBOWS', 'LEG RAISES', 'LUNGES', 'LUNGE STEP UPS', 'MARCH STEPS', 'OVERHEAD PUNCHES', 'PIKE PUSH UPS', 'PLANK JACKS', 'PLANK JUMP INS', 'PLANK LEG RAISES', 'PLANK ROTATIONS', 'PLANK WALK OUTS', 'PUNCHES', 'PUSH UPS', 'RAISED LEG HOLD', 'RAISED LEG PUSH UPS', 'REVERSE CRUNCHES', 'SEAL JACKS', 'SHOULDER TAPS', 'SHRIMP SQUATS', 'SIDE BRIDGES', 'SIDE ELBOW PLANK', 'SIDE KICKS', 'SIDE LEG RAISES', 'SIDE TO SIDE LUNGES', 'SINGLE LEG BRIDGES', 'SITTING TWISTS', 'SIT UPS', 'SLOW CLIMBERS', 'SPLIT JACKS', 'SQUAT HOLD PUNCHES', 'SQUATS', 'TRICEP EXTENSIONS', 'UPPERCUTS', 'V UPS', 'WALL SIT'];

const timerDisplay = document.getElementById('timerDisplay');
const roundCountDisplay = document.getElementById('roundCountDisplay');
const workoutDisplay = document.getElementById('workout-display');

let roundCount = 1;


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

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


function generateWorkout(bodySection) {
    const randomIndex = Math.floor(Math.random() * bodySection.length);
    let workout = bodySection[randomIndex];
    workoutDisplay.textContent = workout;

    console.log("workout: ", workout);
    let workoutPicture = document.getElementById('workout-picture');
    workoutPicture.src = "images/" + workout.toLowerCase() + ".png";
    console.log("workoutPicture: ", workoutPicture);
}

/*function skipExercise(bodySection) {
    document.getElementsByClassName('skip').addEventListener('Space', () => {
        generateWorkout(bodySection);
    })
}
*/


document.getElementById('arms').addEventListener('click', () => {
  startTimerArms(45);
  generateWorkout(armWorkouts);
  
})


// Function to handle the arms timer
function startTimerArms(totalTime) {
    let remainingTime = totalTime;

    

    document.getElementById("skip").addEventListener('click', () => {
        generateWorkout(armWorkouts);
    });
    


    
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

// Function to handle the legs timer
function startTimerlegs(totalTime) {
    let remainingTime = totalTime;

    document.getElementById("skip").addEventListener('click', () => {
        generateWorkout(legWorkouts);
    });

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

// Function to handle the abs timer
function startTimerAbs(totalTime) {
    let remainingTime = totalTime;

    document.getElementById("skip").addEventListener('click', () => {
        generateWorkout(coreWorkouts);
    });

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
  startTimerRandom(45);
  generateWorkout(allWorkouts);
  
})

// Function to handle the random timer
function startTimerRandom(totalTime) {
    let remainingTime = totalTime;

    document.getElementById("skip").addEventListener('click', () => {
        generateWorkout(allWorkouts);
    });

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

