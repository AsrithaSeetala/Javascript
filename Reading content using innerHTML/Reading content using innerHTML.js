function changeStyle() {
    
    var confirmation = confirm("confirming to submit");
    
    if (confirmation == true) {
        
        var paragraph = document.getElementsByClassName ("para");

        var element1 = paragraph[0].innerHTML;
        var element2 = paragraph[1].innerHTML;
        var element3 = paragraph[2].innerHTML;
        var addThem = paragraph[3].innerHTML = element1 + element2 + element3;


        var element1 = paragraph[0].innerHTML="";
        var element2 = paragraph[1].innerHTML="";
        var element3 = paragraph[2].innerHTML="";

        document.getElementById("test").style.visiblity="hidden";
    }
}
