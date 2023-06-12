let currentDate = new Date();
//adding one to the currentMonth variable because months range from 0-11
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDate();
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


const dayValue = document.getElementById("day");
const monthValue = document.getElementById("month");
const yearValue = document.getElementById("year");

function birthdate () {
if (dayValue.value === "" || monthValue.value === "" || yearValue.value === "") {
    //alert method will show a box if requirements aren't met
    alert("All fields must be filled.");   
} else if (dayValue.value >= 32 || dayValue.value > month[1]) {
  console.log(dayValue)
  document.querySelector(".day-error").textContent = "Must be a valid day.";
  document.getElementById("day-label").style.color = "#E0115F";
} else if (monthValue.value >= 13) {  
  document.querySelector(".month-error").textContent = "Must be a valid month.";
   document.getElementById("month-label").style.color = "#E0115F";
} else if (yearValue.value >= currentYear + 1) {
  document.querySelector(".year-error").textContent = "Must be a valid year.";
  document.getElementById("year-label").style.color = "#E0115F";
} else {
  document.querySelector(".day-error").innerHTML = "";
  document.getElementById("day-label").style.color = "hsl(0, 1%, 44%)";
  document.querySelector(".month-error").innerHTML = "";
  document.getElementById("month-label").style.color = "hsl(0, 1%, 44%)";
  document.querySelector(".year-error").innerHTML = "";
  document.getElementById("year-label").style.color = "hsl(0, 1%, 44%)";
}
  if (dayValue.value > currentDay) {
    currentDay = currentDay + month[currentMonth - 1];
    currentMonth = currentMonth - 1; 
  }
  if(monthValue.value > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
let spanYear = document.getElementById("years-dis");
  console.log(spanYear)
let spanMonth = document.getElementById("months-dis");
let spanDay = document.getElementById("days-dis");

let resultDay = currentDay - dayValue.value;
let resultYear = currentYear - yearValue.value;
let resultMonth = currentMonth - monthValue.value;

spanYear.textContent = resultYear;
  console.log(spanYear)
spanMonth.textContent = resultMonth;
spanDay.textContent = resultDay;
}

function resetDay() {
    document.querySelector(".day-error").textContent = "";
  document.getElementById("day-label").style.color = "hsl(0, 1%, 44%)";
}

//leap year function
function isLeapYear(year) {  
  year = yearValue.Value
  if (year % 400 === 0 && year % 100 != 0 || year % 400 === 0) {
    month[1] =+ 1; //add a day to February 
  }
}


const submit = document.getElementById("btn");
submit.addEventListener("click", birthdate);
