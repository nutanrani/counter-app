let countEl= document.getElementById("count-el")
console.log(countEl)

let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0;
function increment(){
    console.log("clicked");
    count += 1
    countEl.textContent = count;
}


function save() {        
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}

