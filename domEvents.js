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

