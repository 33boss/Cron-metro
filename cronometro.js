var minutesE1 = document.querySelector('#minutes')
var secondsE1 = document.querySelector('#seconds')
var millisecondsE1 = document.querySelector('#milliseconds')
var startbtn = document.querySelector('#starbtn')
var pausebtn = document.querySelector('#pausebtn')
var resumebtn = document.querySelector('#resumebtn')
var restbtn = document.querySelector('#restbtn')

var interval
var minutes = 0 
var seconds = 0
var milliseconds = 0
var isPaused = false


startbtn.addEventListener("click", starttimer )
pausebtn.addEventListener('click', pausetimer)
resumebtn.addEventListener('click', resumetimer)
restebtn.addEventListener('click', resetTimer)


function starttimer(){
    interval = setInterval(()=>{

        if(!isPaused){
        milliseconds += 10
       
       

        if(milliseconds === 1000){
            seconds++
            milliseconds=0
        }
        
     

        if(seconds === 60){
            minutes++
            seconds = 0
        }
        

        minutesE1.textContent =minutes
        secondsE1.textContent =seconds
        millisecondsE1.textContent=milliseconds


       }
        
        
    },10)

    startbtn.style.display = 'none'
    pausebtn.style.display = 'block'
}

function pausetimer(){
    isPaused = true
    pausebtn.style.display = 'none'
    resumebtn.style.display = 'block'
}

function resumetimer(){
    isPaused = false
    pausebtn.style.display = 'block'
    resumebtn.style.display ='none'
}

function resetTimer(){
  clearInterval(interval)
  minutes =0
  seconds=0
  milliseconds=0

  minutesE1.textContent = '00'
  secondsE1.textContent ='00'
  millisecondsE1.textContent='000'

  startbtn.style.display = 'block'
  pausebtn.style.display = 'none'
  restebtn.style.display = 'none'
}


function formattime(time){
return time < 10 ? `0${time}`  : time
}

function formatmilliseconds(){
    return time < 100 ? time.padStart(3, '0' ): time
}