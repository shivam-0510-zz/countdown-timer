const daysE1=document.getElementById('days')
const hoursE1=document.getElementById('hours')
const minsE1=document.getElementById('mins')
const secondsE1=document.getElementById('seconds')

const birthDate='5 Oct 2021';

function countdown()
{
     const birthDayDate=new Date(birthDate);
     const currentDate=new Date();

     const totalseconds=(birthDayDate-currentDate)/1000;

     const days=Math.floor(totalseconds/3600/24);
     const hours=Math.floor(totalseconds/3600)%24;
     const mins=Math.floor(totalseconds/60)%60;
     const seconds=Math.floor(totalseconds)%60;

     daysE1.innerHTML=formatTime(days);
     hoursE1.innerHTML=formatTime(hours);
     minsE1.innerHTML=formatTime(mins);
     secondsE1.innerHTML=formatTime(seconds);
}
function formatTime(times)
{
    return times < 10 ? (`0${times}`):time;
}
countdown();
setInterval(countdown,1000);