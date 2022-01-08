function changeText () {

    var child = document.getElementById('test');
    var parent = child.parentElement;
    parent.style.color = "red";

    //  down to top executing --- with respect to sibling child 

    
    var t1 = document.getElementById('test1');
    var sibling = t1.nextElementSibling;
    // var sibling = t1.previousElementSibling;
    sibling.style.color = "blue";

}