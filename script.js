const hourElement = document.querySelector('#hour')
const minuteElement = document.querySelector('#minute')
const secondElement = document.querySelector('#second')

setInterval(() => {
    const getTime = new Date();
    const hour = getTime.getHours().toString().padStart(2, '0')
    const minute = getTime.getMinutes().toString().padStart(2, '0')
    const second = getTime.getSeconds().toString().padStart(2, '0')

    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minute;
    secondElement.innerHTML = second;
    console.log(hour, minute, second);
   
}, 1000);