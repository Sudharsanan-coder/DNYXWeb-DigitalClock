function updateClock() {
    const clockElement = document.getElementById('clock');
    const newnow = new Date();
    
    let hours = newnow.getHours().toString().padStart(2, '0');
    let minutes = newnow.getMinutes().toString().padStart(2, '0');
    let seconds = newnow.getSeconds().toString().padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); 
