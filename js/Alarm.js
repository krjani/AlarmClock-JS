console.log('we are in solution of Alarm project');

// Add EventListener to Submit Alarm
let Submit = document.getElementById('Submit');
Submit.addEventListener('click',setAlarm);

// function to play the Alarm ringtone
function ringbell(){
    console.log('Abhi jago bsdk jago abhi')
    var audio = new Audio('msg.mp3');
    audio.play();
}

// this function will run whenever the Alarm will set from an UI.
 
function setAlarm(e){
    e.preventDefault();
    const Alarm = document.getElementById('Alarm');
    alarmDate = new Date(Alarm.value);
    alert('Your Alarm is set wait untill it rang !!')
    console.log(`your alarm is setting for ${alarmDate}`);
    // here you get alarmDate
    
    todayDate = new Date();
    console.log(`this is today's date and time`,todayDate);
    // so here you get the today's date

    // Alarm will set for always future.So we have to the differnce of milisecond for that we have to ring the alarm

    const differnce = alarmDate - todayDate;
    console.log('after this milisecond the alarm will rang',differnce);

    // here you get always the positive difference because alarm will set for future.

    if (differnce > 0){
        setTimeout(()=>{
            ringbell();
        },differnce);
    }
    
}