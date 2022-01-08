 // This is creating a Header
 
 function newParagraph() { 

    var elementH = document.createElement("h2");

    var main = document.getElementById("main");

    main.appendChild(elementH);

    var textH = document.createTextNode("Referencing Journaling");

    elementH.appendChild(textH);
    
    // This is creating a paragragh
    
     var element = document.createElement("p");

     var main = document.getElementById("main");

     main.appendChild(element);

     var text = document.createTextNode("Thinking of Journaling");

     element.appendChild(text);

    // Creating attribute
    
     var pAttribute = document.createAttribute("id");

     pAttribute.value= "test";

     element.setAttributeNode(pAttribute); // not used append as its not a child node

}


// Removing the Header

function removeHeader() { 

    var elementH = document.getElementsByTagName("h2")[2]; // padding gets counted so header position is 1 as we start from 0

    var parent = elementH.parentNode; // div will act as parent node

    parent.removeChild(elementH);

    var element = document.getElementsByTagName("p")[4]; // removing paragraph element

    parent.removeChild(element);

}



