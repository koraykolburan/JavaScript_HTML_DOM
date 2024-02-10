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
    document.body(content).appendChild(menu);
}
// Calling the function finally
createMenu(technologies);