//Adding paragprah and deleting paragraph with onclick Attribute
const div1 = document.createElement("div");
div1.setAttribute("id", "forButtons");
document.body.appendChild(div1);
div1.style.border = "1px solid black";
div1.style.borderRadius = "12px";
div1.style.backgroundColor = "darkBlue";
function myFunction() {
    const p1 =  document.createElement("p");
    const text1 = document.createTextNode("Text...");
    const br1 = document.createElement("BR");
    p1.appendChild(text1);
    div1.appendChild(p1);
    p1.style.textAlign = "center";
    p1.style.margin = "5px";
    div1.style.border = "1px solid white";
    div1.style.borderRadius = "12px";
};

function myFunction2() {
    const element = document.getElementsByTagName("p")[0];
    element.remove();
};

//Changing text with onclick Attribute
function changeHead(id){
    id.innerHTML = "This heading has changed! (Double Click Now!)";
    id.style.color = "red";
    id.style.fontStyle = "italic";

};
function changeHead2(id){
    id.innerHTML = "Ooops! Bye!";
    id.style.color = "white";
    id.style.backgroundColor = "black";
};

//Assign events to HTML elements with attributes: Date()
function displayDate(){
    document.getElementById("date1").innerHTML = Date();
};

//Checking the Cookies with onload() Attribute, we wrote the function in the body tag as  onload="checkCookies()" 
function checkCookies(){
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled!";
    }
    document.getElementById("cookies").innerHTML = text;
}

//The oninput Event
function upperCase(){
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

//The onchange Event
function upperCase2(){
    const x2 = document.getElementById("fname2");
    x2.value = x2.value.toUpperCase();
}

//The onmouseover and onmouseout Attribute
function mOver(obj){
    obj.innerHTML = "Oops! Thank You!";
    obj.style.width = "150px";
    obj.style.height = "50px";
    obj.style.padding = "40px";
    obj.style.cursor = "wait";
    obj.style.textAlign = "center";
    obj.style.borderRadius = "12px";
    obj.style.color = "red";
    obj.style.fontSize = "25px";
}

function mOveout(obj){
    obj.innerHTML = "Goodbye!";
    obj.style.width = "120px";
    obj.style.height = "20px";
    obj.style.padding = "40px";
    obj.style.color = "blue";
    obj.style.fontSize = "15px";
}

//The onmousedown & onmouseup attributes
function mDown(obj){
    obj.innerHTML = "Wow I'm so much BIGGER right now! Than, Let go of me!";
    obj.style.backgroundColor = "pink";
    obj.style.color = "red";
    obj.style.width = "90%";
    obj.style.height = "40px";
    obj.style.padding = "40px";
    obj.style.fontSize = "22px";
    obj.style.borderRadius = "12px";
}

function mUp(obj){
    obj.innerHTML = "Have a nice day!";
    obj.style.backgroundColor = "darkcyan";
    obj.style.color = "black";
    obj.style.width = "120px";
    obj.style.height = "40px";  
    obj.style.padding = "40px";
}

//DOM Event Listeners
let y = document.getElementById("myBtn");
y.addEventListener("mouseover", myFunction3)
y.addEventListener("click", myFunction4)
y.addEventListener("mouseout", myFunction5)

function myFunction3(){
    document.getElementById("demo").innerHTML += "Moused over! <br>";
}
function myFunction4(){
    document.getElementById("demo").innerHTML += "Clicked! <br>";
}
function myFunction5(){
    document.getElementById("demo").innerHTML += "Moused out! <br>";
}

//"Resize" event handler
window.addEventListener("resize", function(){
    this.document.getElementById("demo2").innerHTML = Math.random();
}) 

