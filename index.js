let count;
const numberEl = document.getElementById("number");
const saveEl = document.getElementById("save-el");
const totalEL = document.getElementById("total-el");
let total;
let countArr = [];

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", minus);

const incrementBtn = document.getElementById("increment-btn");
incrementBtn.addEventListener("click", increment);

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", save);

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", reset);

const storedCount = JSON.parse(localStorage.getItem("count"));
const storedTotal = parseInt(localStorage.getItem("total"), 10);

if (storedCount && storedTotal) {
    countArr = storedCount;
    total = storedTotal;
    renderCount();
}

count = 0;

function increment() {
    count = count + 1;
    numberEl.textContent = count;
}

function minus() {
    count = count - 1;
    numberEl.textContent = count;
}

function save() {
    countArr.push(count);
    
    count = 0;
    numberEl.textContent = count;
    renderCount();

    localStorage.setItem("count", JSON.stringify(countArr));
    localStorage.setItem("total", total.toString());
}

function renderCount() {
    total = 0;
    let countText = "";
    for (i = 0; i < countArr.length; i++) {
        countText += `${countArr[i]},`;
        total += countArr[i];
        console.log("save ~ countText:", countText);
    }
    console.log(countArr);

    saveEl.textContent = "Reminder : " + countText;
    totalEL.textContent = "Total : " + total;
}

function reset() {
    localStorage.clear();
    countArr = [];
    totalEL.textContent = "Total : ";
    saveEl.textContent = "Reminder : ";
}
