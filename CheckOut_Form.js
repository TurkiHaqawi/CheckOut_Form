



var imgs = [
    
    "http://placehold.it/300/450",
    "http://placehold.it/300/420",
    "http://placehold.it/300/430",
    "http://placehold.it/300/400"
],
    randomImg = document.getElementById('randomImg');
    

function shaw() {
    "use strict";
    
    var random = Math.floor(Math.random() * imgs.length);
    randomImg.src = imgs[random];
}

setInterval(shaw, 1000);


/*
function show() {
    "use strict";
    
    var random = Math.floor(Math.random() * arrImg.length);
    randomImg.src = arrImg[random];
}

setInterval(show, 1000);
*/










var second = 300,
    
    displayTimer = document.querySelector('.timer'),
    
    secondPass,
    
    counter = setInterval(secondPass, 1000);


function secondPass() {
    "use strict";
    
    var min = Math.floor(second / 60),
        
        remSecond = second % 60;
    
    if (second < 10) {
        
        remSecond = "0" + remSecond;
    }
    
    displayTimer.textContent = `${min}:${remSecond}`;
    
    if (second > 0) {
        
        second -= 1;
        
    } else {
        
        clearInterval(secondPass);
        displayTimer.textContent = "Done...";
        
    }    
}







var div = document.querySelector('.GSN');

function GSN() {
    "use strict";
    
    var chars = "123456789ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz",
        
        serialLenght = 6,
        
        seriarNumber = '',
        
        i;
    
    
    for(i = 0; i < serialLenght; i++) {
        
        var randomNumber = Math.floor(Math.random() * chars.length);
        
        seriarNumber += chars.substring(randomNumber, randomNumber + 1);
    }
    
    div.textContent = seriarNumber;
}

GSN();



























