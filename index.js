//let's create this page with JavaScript HTML DOM 

//creating a DIV with a class
const div1 = document.createElement("div");
div1.classList.add("content");
document.body.appendChild(div1);

//creating two ARTICLEs with a class
const article1 = document.createElement("article");
article1.setAttribute("class", "htmlDom");
div1.appendChild(article1);
const article2 = document.createElement("article");
article2.setAttribute("class", "menuDOM");
div1.appendChild(article2);

//creating a H1 and P tag
const head1 = document.createElement("h1");
const h1 = document.createTextNode("The Browser Environment: JavaScript HTML DOM");
const p1 = document.createElement("p");
const t1 = document.createTextNode("You can click on the 'inspect' attributes on your page(chrome - console) and you can reach these below:");
article1.appendChild(head1);
head1.appendChild(h1);
p1.appendChild(t1);
article1.appendChild(p1);

//creating CODE tag
const c1 = document.createElement("code");
const t2 = document.createTextNode("document.head <br> document.body <br> document.querySelector(\"figure.(class or id name) > img\");");
article1.appendChild(c1);
c1.appendChild(t2);
const s1 = document.createElement("span");
const t3 = document.createTextNode("this is .\"HTMLImageElement\">>>>> ");


// let's write some CSS for our code



// -------------------------------------------------------- Create A Menu with DOM ---------------------------------
let technologies = ["HTML", "CSS", "JavaScript", "DOM"];

function createMenu ( items ) {
    //Let's create a new element for containing the menu
    let menu = document.createElement("ul");
    
    //Iterate over the items and create one LI element for each item
    items.forEach(function(element, index, array){
       let menuItem = document.createElement("li");
       let textNode = document.createTextNode(element);
       menuItem.appendChild(textNode);

       menu.appendChild(menuItem);
    })
    document.body.appendChild(menu);
}
// Calling the function finally
createMenu(technologies);
