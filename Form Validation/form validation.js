function validateTextbox() {
 
    var box = document.getElementById("first name");
    var box1 = document.getElementById("middle name");

     // if (box.value == "" || box1.value == "") {
     // alert("The field marked in red cannot be blank");
     // return false;}

    if (box.value.length < 5 || box1.value.length < 5) {
    alert("Please enter atleast 5 characters");
    box.focus();
    box.style.border ="solid 3px red"; 
    return false;}
     
     }
