// console.log("hellow javascropts");

let plusBtn = document.getElementById("increment");
let minusBtn = document.getElementById("decrement");
let result = document.getElementById("result");
// console.log(plusBtn);
// console.log(minusBtn);
let play = new Audio("click-151673.mp3");
let counter = 0;
plusBtn.addEventListener("click",function(){
  play.play();
  counter++;
  result.innerHTML = counter;
  play.play();
  // console.log(counter);
})
minusBtn.addEventListener("click",function(){
  // console.log(counter);
  play.play();
  if(counter > 0){

    counter--;
    result.innerHTML = counter;
  }
})

