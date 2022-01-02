var orc = {

hair: "Black",
age: 22,
plugged: true,
ear: function() 
  {
    document.write("Hello mic testing");
  }
}

orc.plugged = false;

if(orc.plugged == true) {
    orc.ear();
}
else {
    document.write("plug out");
}
