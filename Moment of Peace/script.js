let secondEl = document.getElementById("second");
let messageEl = document.getElementById("message");

let counter;
let timevalue; 

// 20 sec function
function firstfun(){
    clearInterval(timevalue);
    counter = 20;
    timevalue = setInterval(intervalfun,1000);
}

// 30 sec function
function secondfun(){
    clearInterval(timevalue);
    counter = 30;
    timevalue = setInterval(intervalfun,1000);
}

// 40 sec function
function thirdfun(){
    clearInterval(timevalue);
    counter = 40;
    timevalue = setInterval(intervalfun,1000);
}

// 60 sec function
function forthfun(){
    clearInterval(timevalue);
    counter = 60;
    timevalue = setInterval(intervalfun,1000);
}

function intervalfun(){
    if(counter > 0){
        secondEl.textContent = counter;
        messageEl.textContent = "seconds left"
    }
    if(counter === 0){
        clearInterval(timevalue);
        secondEl.textContent = "";
        messageEl.textContent = "Your moment is complete";
    }
    counter = counter - 1;
}