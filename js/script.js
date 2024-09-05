//ex1
function textShow(){
	document.getElementById('sh').style.display='block';
}
function textHide(){
	document.getElementById('sh').style.display='none';
}
//ex2
function textChange(){
	document.getElementById('tc').innerHTML="welcome to wwr"
}
//ex3
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}
//ex4
function BulbOn(){
	document.getElementById('bulb').src='images/on.gif';
}
function BulbOff(){
	document.getElementById('bulb').src='images/off.gif';
}
//ex5
function EmojiA(){
	document.getElementById('em').src='images/sad.png';
}
function EmojiB(){
	document.getElementById('em').src='images/smile.png';
}
//ex6
function ChangeCss(){
	document.getElementById('hw').style.color='red';
}
//ex7
function fontSize(){
	document.getElementById('fs').style.fontSize='35px';
}
//ex8
var number1 = 5;
var number2 = 2;
var result = number1 + number2;

function ShowResult(){
	document.getElementById('sr').innerHTML=result;
} 
//ex9
let roll1 = 7;
let roll2 = 2;
let roll = roll1 + roll2;

function ShowAge(){
	document.getElementById('srr').innerHTML=roll;
} 
//ex10
let aeg1, aeg2;
age1 = 4;
age2 = 2;
age1 += roll2;

function ShowRoll(){
	document.getElementById('ag').innerHTML=age1;
} 
//ex11
let num1, num2, nbr;
nbr1 = 5;
nbr2 = 5;

nbr = nbr1 < nbr2;

function ShowNbr(){
	document.getElementById('nb').innerHTML=nbr;
}
//ex12
let num11, num22, nbr11;
nbr11 = 5;
nbr22 = 6;

nbr11 = nbr11 < nbr22;

function ShowNbr2(){
	document.getElementById('nb2').innerHTML=nbr11;
}
//ex13
let num111, num222, nbr111;
nbr111 = 5;
nbr222 = 6;

nbr111 = nbr111 == nbr222;

function ShowNbr3(){
	document.getElementById('nb3').innerHTML=nbr111;
}
//ex14
let num1111, num2222, nbr1111;
nbr1111 = 5;
nbr2222 = 5;

nbr1111 = nbr1111 == nbr2222;

function ShowNbr4(){
	document.getElementById('nb4').innerHTML=nbr1111;
}
//ex15
let num11111, num22222, nbr11111;
nbr11111 = 5;
nbr22222 = 5;

nbr11111 = nbr11111 === nbr22222;

function ShowNbr5(){
	document.getElementById('nb5').innerHTML=nbr11111;
}
//ex16
let num111111, num222222, nbr111111;
nbr111111 = 5;
nbr222222 = "5";

nbr111111 = nbr111111 == nbr222222;

function ShowNbr6(){
	document.getElementById('nb6').innerHTML=nbr111111;
}
//ex17
let num1111111, num2222222, nbr1111111;
nbr1111111 = 5;
nbr2222222 = "5";

nbr1111111 = nbr1111111 === nbr2222222;

function ShowNbr7(){
	document.getElementById('nb7').innerHTML=nbr1111111;
}
//ex18
let cars= ["Toyota", "Audi", "BMW"];

function ShowNbr8(){
	document.getElementById('nb8').innerHTML=cars;
}
//ex19
let cars1= ["Toyota", "Audi", "BMW"];

function ShowNbr9(){
	document.getElementById('nb9').innerHTML=cars1[2];
}
//ex20
let data={ rifat:20, niloy:10, durjoy:30 };

function ShowNbr10(){
	document.getElementById('nb10').innerHTML=data['rifat'];
}
//ex21
let data1={ name:"Rifat", niloy:10, durjoy:30 };

function ShowNbr11(){
	document.getElementById('nb11').innerHTML=data1['name'];
}
//ex22
let data2={ name:"Rifat", niloy:10, durjoy:30 };

function ShowNbr12(){
	document.getElementById('nb12').innerHTML=data2['name'];
}
//ex23
let data3={ name:"Rifat", niloy:10, durjoy:30 };

function ShowNbr13(){
	document.getElementById('nb13').innerHTML=data3['name'];
}
//ex24
let data4={ name:"Rifat", niloy:10, durjoy:30 };

function ShowNbr14(){
	document.getElementById('nb14').innerHTML=data3['name'];
}
//ex25
let data5={ name:"Rifat", niloy:10, durjoy:30 };

function ShowNbr15(){
	document.getElementById('nb15').innerHTML=data3['name'];
}


//jq 
$(document).ready(function(){
	alert("Welcome");
})