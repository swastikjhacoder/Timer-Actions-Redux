// define action constants here
export const INCREMENT_TIMER = "Increment Timer";
export const PAUSE_TIMER = "Pause Timer";
export const RESET_TIMER = "Reset Timer";
export const START_TIMER = "Start Timer";
// define action creators here
export const incrementTimer = (time) =>({time, type: INCREMENT_TIMER});
export const pauseTimer = (time) =>({time, type: PAUSE_TIMER});
export const resetTimer = (time) =>({time, type: RESET_TIMER});
export const startTimer = (time) =>({time, type: START_TIMER});
