function returnKeyValue(){
    //get values from textarea
    var key_val=document.getElementById("key_vals").value; 
    var first="\"";
    var second=":\"";
    var third="\",";
    
    //get key and values from text fields
    var getKeyInput=document.getElementById("key").value;
    var getValueInput=document.getElementById("value").value;
    
    //concatenate strings
    key_val+=first+getKeyInput.str;
    key_val+=first;
    key_val+=second;
    key_val+=getValueInput;
    key_val+=third;
     //put key values in textarea
    document.getElementById("key_vals").innerHTML=key_val;
}

function finishKeyVal(){
    //get values from textarea
    let key_val = document.getElementById("key_vals").value;
    let text=key_val;
    //replace last element where comma is with close brackets only
    text=text.replace("\",","\"");
    //put replaced values in text field
    document.getElementById("key_vals").innerHTML=text;
}