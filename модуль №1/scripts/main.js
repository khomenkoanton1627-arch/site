var myImage = document.querySelector('img'); 
myImage.onclick = function() { 
var mySrc = myImage.getAttribute('src'); 
if(mySrc === 'images/ak47_midnight_laminate.png') { 
   myImage.setAttribute ('src','images/ak47_wild_lotus.png'); 
} else { 
 myImage.setAttribute ('src','images/ak47_midnight_laminate.png'); 
} 
}
var myVariable = 'anton';
/*
коментарий 1
комментарий 2
комментарий 3
*/
//комментарий в одной строчке
6+9;
console.log(6+9);
"Hello " + "world!";
console.log("Hello " + "world!");
9 - 3;
console.log(9-3);
8 * 2;
console.log(8*2);
myVariable === 'egor';
function multiply(num1,num2) { 
var result = num1 * num2; 
return result; 
}
multiply(4,7); 
multiply(20,20); 
multiply(0.5,3);
var myButton = document.querySelector('button'); 
var myHeading = document.querySelector('h2');
function setUserName() { 
var myName = prompt('Please enter your name.'); 
 localStorage.setItem('name', myName); 
 myHeading.innerHTML  = 'Привет, ' + myName; 
}
myButton.onclick = function() { 
setUserName(); 
}