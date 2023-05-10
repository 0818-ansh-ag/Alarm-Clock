
let alarmTimer
let alarmBtn = document.getElementById("alarmBtn");
let inputHour = document.getElementById("inputHour");
let inputMin = document.getElementById("inputMin");
let inputampm = document.getElementById("inputampm");
let alarmContent = document.getElementById("alarmContent");
let setAlarm = false;
let ringtone = new Audio("ringtone/ring-1.mp3");
   
setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am;
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");
    let hr = document.querySelector(".hr_dots");
    let min = document.querySelector(".min_dots");
    let sec = document.querySelector(".sec_dots");
    
    if(h>12){
        am="PM";
    }
    else{
        am="AM";
    }

    //convert 24hr clock in 12hr
    if(h>12)
    {
        h = h-12;
    }

    // add 0 id hrs is less than 10

    if(h<10)
    {
        h = `0${h}`;
    }
    m = (m<10) ? `0${m}` : m;
    s = (s<10) ? "0" + s : s;

    hours.innerHTML = h + `<br><span>HOURS</span>`;
    minutes.innerHTML = m + `<br><span>Minutes</span>`;
    seconds.innerHTML = s + `<br><span>Second</span>`;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h)/12;
    //12 hrs clock
    mm.style.strokeDashoffset = 440 - (440 * m)/60;
    //60 minutes
    ss.style.strokeDashoffset = 440 - (440 * s)/60;
    //60seconds
    
    // hr.style.transform = `rotate(${h * 30}deg)`;
    // //360/12 =30
    // min.style.transform = `rotate(${m * 6}deg)`;
    // //360/12 =30
    // sec.style.transform = `rotate(${s * 6}deg)`;
    //360/12 =30
    
    let currentTime = h+":"+m + am;
    if(alarmTimer== currentTime){
        ringtone.play();
        ringtone.loop = true;
    }
    
},1000);


let option
for(let i=0;i<=12;i++){
    if(i<10){
        i=`0${i}`;
    }
    option  += ` <option value="${i}">${i}</option>`;
   
}
inputHour.innerHTML += option;

let optionMin
for(let i=0;i<=59;i++){
    if(i<10){
        i=`0${i}`;
    }
    optionMin  += ` <option value="${i}">${i}</option>`;
   
}
inputMin.innerHTML += optionMin;

let ap;
let optionAmPm
for(let i=2;i>0;i--){
    if(i==1){
        ap =`AM`;
    }
    else{
        ap ="PM";
    }
    optionAmPm  += ` <option value="${ap}" >${ap}</option>`;
    
}
inputampm.innerHTML += optionAmPm;


function ringbell(){
    if(setAlarm){
        alarmTimer="";
        ringtone.pause();
        alarmContent.classList.remove("disable");
        alarmBtn.innerText = "Set Alarm";
        return setAlarm = false;
    }
    if(inputHour.value == "Hours" || inputMin.value =="Minutes" || inputampm.value=="AM/PM" ){
        return alert("Please set valid alarm!")
    }
    let time = `${inputHour.value}:${inputMin.value}${inputampm.value}`;
    alarmTimer = time;
    alarmBtn.innerText="Clear Alarm";
    setAlarm = true;
    alarmContent.classList.add("disable");

}
alarmBtn.addEventListener("click",ringbell)




