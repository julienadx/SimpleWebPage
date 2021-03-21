var bOp01 = document.getElementById("firstOp");
var bOp02 = document.getElementById("secondOp");
var bOp03 = document.getElementById("thirdOp");
var bOp04 = document.getElementById("fourthOp");
var input01 = document.getElementById("input01");
var setContact = document.getElementById("setContact");
var textBox = document.getElementById("textBox");
var cardAll = document.getElementById("cardAll");
var validName01 = document.getElementById("validName01");
var pTitle = document.getElementById("pTitle");
var send = document.getElementById("send");
var bOp1 = false;
var bOp2 = false;
var bOp3 = false;
var bOp4 = false;



function textChoice1() {
	if (bOp1 == false) {
		bOp1 = true;
		input01.style.fontStyle = "italic";
		bOp01.style.border = "3px solid blue";
		bOp01.style.color = "blue";
		} else {
		bOp1 = false;
		input01.style.fontStyle = "normal";
		bOp01.style.border = "0px solid black";
		bOp01.style.color = "black";
		}
}

function textChoice2() {
	if (bOp2 == false) {
		bOp2 = true;
		input01.style.fontWeight = "bold";
		bOp02.style.border = "3px solid blue";
		bOp02.style.color = "blue";
		} else {
		bOp2 = false;
		input01.style.fontWeight = "400";
		bOp02.style.border = "0px solid black";
		bOp02.style.color = "black";
		}
}

function textChoice3() {
	if (bOp3 == false) {
		bOp3 = true;
		input01.style.textDecoration = "underline";
		bOp03.style.border = "3px solid blue";
		bOp03.style.color = "blue";
		} else {
		bOp3 = false;
		input01.style.textDecoration = "none";
		bOp03.style.border = "0px solid black";
		bOp03.style.color = "black";
		}
}

function textChoice4() {
	if (bOp4 == false) {
		bOp4 = true;
		input01.style.fontFamily = "cursive";
		bOp04.style.border = "3px solid blue";
		bOp04.style.color = "blue";
		} else {
		bOp4 = false;
		input01.style.fontFamily = "none";
		bOp04.style.border = "0px solid black";
		bOp04.style.color = "black";
		}
}

function contact() {
	textBox.style.display = "none";
	cardAll.style.display = "block";
}

function addOkay() {
	validName01.style.border = "3px solid blue";
	validName01.style.color = "blue";
	var newName01 = document.getElementById("nameCon01").value;
	pTitle.innerHTML = newName01;
	cardAll.style.display = "none";
	textBox.style.display = "block";
}

function fsend() {
	send.style.border = "3px solid blue";
	send.style.color = "blue";
}







bOp01.addEventListener("click", textChoice1, false);
bOp02.addEventListener("click", textChoice2, false);
bOp03.addEventListener("click", textChoice3, false);
bOp04.addEventListener("click", textChoice4, false);
setContact.addEventListener("click", contact, false);
validName01.addEventListener("click", addOkay, false);
send.addEventListener("click", fsend, false);












