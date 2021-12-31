function pas(){
    var a = document.getElementById("passwords").value;
    var b = document.getElementById("passwordss").value;

    if(a==""){
        document.getElementById("messages").innerHTML="Please fill password";
        return false;
    }

    if(a!=b){
        document.getElementById("messages").innerHTML="Password are not same ";
        return false;
    }
}