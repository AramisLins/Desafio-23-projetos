function updateClock(){
    
    const HoursElement = document.querySelector('.hours')
    const minutesElement = document.querySelector('.minutes')
    const secondsElement = document.querySelector('.seconds')

    const now = new Date()
    const hours =  now.getHours().toString().padStart(2,'0')
    const minutes =  now.getMinutes().toString().padStart(2,'0')
    const seconds =  now.getSeconds().toString().padStart(2,'0')
    HoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

}

setInterval(updateClock, 1000)