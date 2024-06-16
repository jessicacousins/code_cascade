let numbersCode = document.querySelector(".numbersCode");
let numString = numbersCode.textContent;
let splitNum = numString.split("");

numbersCode.textContent = "";
for (let i = 0; i < splitNum.length; i++) {
    let span = document.createElement('span');
    span.textContent = splitNum[i];
    span.style.animationDelay = `${i * 0.05}s`; 
    numbersCode.appendChild(span);
}
