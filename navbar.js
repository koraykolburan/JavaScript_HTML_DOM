//The first that we need to do is to register a callback on all of the anchors in our page (pop-up window with hover effect)
//grab a reference to all the menu links
let  $menuLinks = document.querySelectorAll(".menu-item > a"); // Selecting all anchors under the .menu-item


function displayInfoPanelForElement(event){
    let $anchor = event.target;
    let $infoPanel = $anchor.parentNode.querySelector(".menu-item-info");

    //console.log($infoPanel);
    // make the panel visible!
    $infoPanel.classList.add("is-visible");
}

function hideInfoPanelForElement(event){
    let $anchor = event.target;
    let $infoPanel = $anchor.parentNode.querySelector(".menu-item-info");

    //console.log($infoPanel);
    // make the panel hidden when the mouse out of it!
    $infoPanel.classList.remove("is-visible");
}

// We cannot use forEach() function because this list is not an array. So we have to iterate explicitly on the list

//Iterate on the list and register a callback when the user hover on the link
for ( let i = 0; i < $menuLinks.length; i++) {
    //we are on each Anchor element in the menu
    //register a callback when the mouse hover on the link
    let $anchor = $menuLinks[i];

    $anchor.addEventListener("mouseover", displayInfoPanelForElement);
    $anchor.addEventListener("mouseout", hideInfoPanelForElement)
}