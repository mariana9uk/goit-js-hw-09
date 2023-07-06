import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputDate = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const timerDays = document.querySelector("[data-days]");
const timerHours = document.querySelector("[data-hours]");
const timerMinutes = document.querySelector("[data-minutes]");
const timerSeconds = document.querySelector("[data-seconds]");
let selectedDate;
console.log(startBtn)
console.log(inputDate)
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
const now=new Date()
    selectedDate = selectedDates[0];
           if ( selectedDate<now) {
      startBtn.disabled=true;
      window.alert("Please choose a date in the future");
      console.log("Wrong date!")
        
    } else {
        startBtn.disabled = false;
    }
    },
  };
flatpickr(inputDate, options);


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero( Math.floor(ms / day));
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value){
    return value.toString().padStart(2, "0");
 };
let intervalID

function makeTimerWork(){ intervalID=setInterval(updateTimer, 1000)
};
function updateTimer(){
   
    const selectedTime = selectedDate.getTime();
    console.log(selectedTime);
    const timeNow = new Date().getTime();
    const timeCut = selectedTime - timeNow;
    console.log(timeCut);
    if (timeCut <=0) {
        clearInterval(intervalID);
        timeDisplay(0, 0, 0, 0);
    } else {
        const { days, hours, minutes, seconds } = convertMs(timeCut);
        timeDisplay(days, hours, minutes, seconds)
        }
}
function timeDisplay(days, hours, minutes, seconds){
    timerDays.textContent=addLeadingZero(days);
    timerHours.textContent=addLeadingZero(hours);
    timerMinutes.textContent=addLeadingZero(minutes);
 timerSeconds.textContent=addLeadingZero(seconds);
}
  startBtn.addEventListener('click', makeTimerWork)



  