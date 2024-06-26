//let's create this page with JavaScript HTML DOM 

//our first note/comment about this Web page
const comment1 = document.createComment("HTML DOM")
document.body.appendChild(comment1);

//creating a DIV with a class
const div1 = document.createElement("div");
div1.classList.add("content");
document.body.appendChild(div1);
document.getElementById("div1")

//creating two ARTICLEs with a class & writing hmtl dom comment/note
const article1 = document.createElement("article");
article1.setAttribute("class", "htmlDom");
div1.appendChild(article1);

const comment2 = document.createComment("Menu with DOM");
div1.appendChild(comment2);

const article2 = document.createElement("article");
article2.setAttribute("class", "menuDOM");
div1.appendChild(article2);


//creating a H1 and P tag
const head1 = document.createElement("h1");
const h1 = document.createTextNode("The Browser Environment: JavaScript HTML DOM");
head1.style.color = "#e8eaea";
const p1 = document.createElement("p");
const t1 = document.createTextNode("You can click on the 'inspect' attributes on your page(chrome - console) and you can reach these below:");
article1.appendChild(head1);
head1.appendChild(h1);
p1.appendChild(t1);
article1.appendChild(p1);

//creating CODE & SPAN & ANCHOR tags
const c1 = document.createElement("code");
const t2 = document.createTextNode("\"document.head\"");
const br3 = document.createElement("BR");
article1.appendChild(c1);
c1.appendChild(t2);
article1.appendChild(br3);

const c5 = document.createElement("code");
const t9 = document.createTextNode("\"document.body\"");
const br4 = document.createElement("BR");
article1.appendChild(c5);
c5.appendChild(t9);
article1.appendChild(br4);

const c6 = document.createElement("code");
const t10 = document.createTextNode("\"document.querySelector(\"figure.(class or id name) > img\");");
article1.appendChild(c6);
c6.appendChild(t10);

const s1 = document.createElement("span");
const t3 = document.createTextNode(" this is the \"HTMLImageElement\". ");
const br5 = document.createElement("BR");
const br6 = document.createElement("BR");
article1.appendChild(s1);
s1.appendChild(t3);
document.getElementsByTagName("span")[0].style.textDecoration = "underline";
document.getElementsByTagName("span")[0].style.color = "pink";
document.getElementsByTagName("span")[0].style.fontStyle = "italic";
article1.appendChild(br5);
article1.appendChild(br6);



const a1 = document.createElement("A");
a1.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement",);
a1.target = "_blank";
const t4 = document.createTextNode("Click for the Documentation");
a1.appendChild(t4);
article1.appendChild(a1);

const p2 = document.createElement("p");
const t5 = document.createTextNode("You are driving your markup using JavaScript. This is the principal reason that we are using JavaScript.")
p2.appendChild(t5);
article1.appendChild(p2);

const hr1 = document.createElement("HR");
article1.appendChild(hr1);

// article2 --------------------------------------------------------------------------------------------------

const head2 = document.createElement("h2");
const h2 = document.createTextNode("Let's Create some HTML using JavaScript");
head2.style.color = "#e8eaea";
head2.appendChild(h2);
article2.appendChild(head2);

const c2 = document.createElement("code");
const t6 = document.createTextNode("\"document.createElement(tagName, options)\" ");
const br1 = document.createElement("BR");
c2.appendChild(t6);
article2.appendChild(c2);
article2.appendChild(br1);

const c3 = document.createElement("code");
const t7 = document.createTextNode("\"document.createTextNode(\"text\")");
const br2 = document.createElement("BR");
c3.appendChild(t7);
article2.appendChild(c3);
article2.appendChild(br2);

const c4 = document.createElement("code");
const t8 = document.createTextNode("\"appendChild()\"");
const br7 = document.createElement("BR");
c4.appendChild(t8);
article2.appendChild(c4);
article2.appendChild(br7);

const c7 = document.createElement("code");
const t11 = document.createTextNode("\"getElementsByTagName(\"P or H1\")[0]\" ");
c7.appendChild(t11);
article2.appendChild(c7);

const s2 = document.createElement("span");
const t12 = document.createTextNode("Remember: this tag works efficiently with indexes like these; [0],[1],[2],[3] . ");
s2.appendChild(t12);
article2.appendChild(s2);
document.getElementsByTagName("span")[1].style.textDecoration= "underline";
document.getElementsByTagName("span")[1].style.color= "pink";
document.getElementsByTagName("span")[1].style.fontStyle= "italic";

const br8 = document.createElement("BR");
article2.appendChild(br8);

const c8 = document.createElement("code");
const t13 = document.createTextNode("\"getElementsByClassName()[1]\" ");
c8.appendChild(t13);
article2.appendChild(c8);

const s3 = document.createElement("span");
const t14 = document.createTextNode("Remember: this tag works efficiently with indexes like these; [0],[1],[2],[3] .");
s3.appendChild(t14);
article2.appendChild(s3);
document.getElementsByTagName("span")[2].style.textDecoration= "underline";
document.getElementsByTagName("span")[2].style.color= "pink";
document.getElementsByTagName("span")[2].style.fontStyle= "italic";

// -------------------------------------------------------- Create A Menu with DOM ---------------------------------

const head3 = document.createElement("h3");
const h3 = document.createTextNode("Create a MENU with DOM & JavaScript");
head3.style.fontStyle = "italic";
head3.style.color = "#76bc53";
head3.appendChild(h3);
article2.appendChild(head3);

let technologies = ["HTML", "CSS", "JavaScript", "DOM"];

function createMenu ( items ) {
    //Let's create a new element for containing the menu
    let menu1 = document.createElement("ul");
    
    //Iterate over the items and create one LI element for each item
    items.forEach(function(element, index, array){
       let menuItemAnchor = document.createElement("A"); 
       menuItemAnchor.setAttribute("href","#"); 
       menuItemAnchor.target= "_blank"; 
       let menuItem = document.createElement("li");  //Original
       let textNode = document.createTextNode(element); //Original
       menuItemAnchor.appendChild(textNode);    //Original
       menuItem.appendChild(menuItemAnchor);   
       
       // some css
       menuItemAnchor.style.textDecoration = "none";    
       menuItemAnchor.style.color = "#fff"; 
       menuItem.style.cssFloat = "left";    
       menuItem.style.backgroundColor = "pink";     
       menuItem.style.padding = "5px";  
       menuItem.style.marginRight = "5px";  
       menuItem.style.listStyleType = "none";   
       menuItem.style.border = "1px solid black";   
       menuItem.style.borderRadius = "12px";    
       menu1.appendChild(menuItem);  //Original
    })
    article2.appendChild(menu1);
}
// Calling the function finally
createMenu(technologies);

// We can do this way, too

/*const cars = ["Saab", "Volvo", "BMW", "Audi", "Tesla"];

let text = "<ul>";
cars.forEach(carsFunction); // we can use this, instead of "for loop" in here.
text += "</ul>";

function carsFunction(value){
    text += "<li>" + value + "</li>";
};
//document.getElementById("").innerHTMl = text; */

/* ---------------------------------- Additional Informations ---------------------------------- */


let pHello = document.getElementById('hello');

pHello.innerText += ' New world!';

//If we can add the HTML elements to our page via DOM, we need to use .innerHTML like this:
pHello.innerHTML += ' We can add tag like this <span>"This is the SPAN TAG!!"</span>';

//outerHTML: is allows us to take a look at the element itself. Now we can change the outer tag. 
pHello.outerHTML = '<h1 id=\"hello\">hello! New world! We can add tag like this. <span>\"This is the SPAN TAG!!\"</span></h1>';
console.dir( pHello );

//Select the span tag
let spanH1 = document.querySelectorAll('h1 span'); //it's gonna to return an ARRAY.
spanH1[0].innerHTML = "new text here!!!"; // we need to use SQUARE BRACKETS to access, because it returns an ARRAY.

//Changing Element Style's --------

// When we can write dir( pHello ); on the console and scroll down, we can see the STYLE OBJECT. And inside of the STYLE object, we able to modify all of the style properties.

let el = document.getElementById('style1');
/*
el.style.background = 'blue';
el.style.color = 'white';
el.style.width = '250px';
el.style.borderRadius = '12px';
el.style.padding = '5px'; 
*/

// We can use more EASY and FAST way like this:
// this is actually via style attribute is not the computed property

el.style.cssText = 'background:darkblue; color:white; width:250px; border-radius:12px; padding:5px; margin:5px';
el.style.cssText += 'height:100px';

// !!-- COMPUTED STYLE --!! (it is not inline style)
/* they are not actual style properties, computed properties come from our CSS files and also the browser defaults.
console.log(getComputedStyle( el ) );   */



//Event Handlers --------

//These functions are ananymous. We need to be careful when we add event listener. If we are not going to remove that callback function that callback function doesn't need a NAME. That's why we need a function with a name(to use removeEventListener)

const cars = ["Saab", "Volvo", "BMW", "Audi", "Tesla"];

let select = document.getElementsByName('cars')[0];
select.onclick = function( event ) {
    console.log( event )
};

function ClickCallback( event ) {
    console.log( 'clicked by addEventListener!' );
}

select.addEventListener( 'click', ClickCallback );

select.removeEventListener( 'click', ClickCallback );

// (About 'event' parameter) And the reason why is because it populates meaning, it assigns to this parameter the symbol name, an event object and that event object gives is details and information about the event that triggered this callback function. !!! it does not matter event or evt, these are just a name.

let element = document.createElement('div'); // this is just created element but it's not placed inside of DOC.

element.style.cssText = "width:200px; height:200px; background:darkblue; border-radius:12px; margin-top:25px;"
element.onclick = function(){ alert('this div inserted Before the section (that has an id as introduction).')};
//document.body.appendChild( element );
//If we want to add this div specifically we need to use this: 

let target = document.getElementById( 'introduction' );

document.body.insertBefore( element, target );


//for div with id (modify)  ------ MINI FINAL PROJECT -----

let elements = document.getElementsByName('cssProperty'); //the array - all of these select dropdown

let introDiv = document.getElementById('modify');

function set(){

    for( let index = 0; index < elements.length; index++ ){

        let cssProperty =  elements[index].getAttribute('id');
        let cssValue = elements[index].value;

        introDiv.style[ cssProperty ] = cssValue;
    }
}

document.getElementById('set').addEventListener('click', set);

/*
1) We've targeted the button then we have added an eventListener called click, 
2) When they click on it, it runs the set function 
3) Then we're creating a variable that stores the array it stores the array(document.getElementsByName('cssProperty');)
4) Then we're iterating through that ARRAY to TARGET each individual Select Dropdown CSS PROPERTY  and VALUE we want to modify
5) After that, we go and take a look at each element in the ARRAY with this: elements[index]
6) And we get it id attribute: .getAttribute('id');
7) Also we have cssValue, we target each select dropdown(elements): let cssValue = elements[index] 
8) And then we pull out its VALUE: .value;
9) Afterward, we grab the DIV element and we've targeted: let introDiv = document.getElementById('modify');
10) Then we've targeted the style object that associated with the div element: introDiv.style[ cssProperty ]
11) Finally we set it equal to the value that we have VALUE: = cssValue;


*/