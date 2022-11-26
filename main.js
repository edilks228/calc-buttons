document.querySelector('.multipy').onclick = multipy
document.querySelector('.divide').onclick = divide
document.querySelector('.plus').onclick = plus
document.querySelector('.minus').onclick = minus
//equals button




function multipy(){
   let X = document.querySelector('.X').value
   let Y = document.querySelector('.Y').value
   let c = X * Y;
   console.log(c);
   document.querySelector('.result__text').innerHTML = c;

}
function divide(){
   let X = document.querySelector('.X').value
   let Y = document.querySelector('.Y').value
   let c = X / Y;
   console.log(c);
   document.querySelector('.result__text').innerHTML = c;

}
function plus(){
   let X = document.querySelector('.X').value
   let Y = document.querySelector('.Y').value
   let c = X + Y;
   console.log(c);
   document.querySelector('.result__text').innerHTML = c;

}
function minus(){
   let X = document.querySelector('.X').value
   let Y = document.querySelector('.Y').value
   let c = X - Y;
   console.log(c);
   document.querySelector('.result__text').innerHTML = c;

}