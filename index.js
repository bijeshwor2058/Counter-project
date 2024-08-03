// console.log("hellow javascropts");

let plusBtn = document.getElementById("increment");
let minusBtn = document.getElementById("decrement");
let result = document.getElementById("result");
// console.log(plusBtn);
// console.log(minusBtn);

let counter = 0;

plusBtn.addEventListener("click",function(){
  
  counter++;
  result.innerHTML = counter;

  // console.log(counter);
})
minusBtn.addEventListener("click",function(){
  // console.log(counter);
  if(counter > 0){
    counter--;
    result.innerHTML = counter;
  }
})

