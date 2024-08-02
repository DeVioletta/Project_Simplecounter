let count = 0
let numberEl = document.getElementById("number")
let saveEl = document.getElementById("save-el")
let totalEL = document.getElementById("total-el")
let total = 0

function increment(){
    count = count + 1
    numberEl.textContent = count
}

function minus(){
    count = count - 1
    numberEl.textContent = count
}

function save(){
    saveEl.textContent += count + ", "
    total += count
    count=0
    numberEl.textContent = count
    totalEL.textContent = "Total : " + total
}

function reset(){
    total = 0
    totalEL.textContent = "Total : "
    saveEl.textContent = "Reminder : "
}