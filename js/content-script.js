window.onload = function(){
    document.getElementById("signInSubmit").addEventListener("click",function(){
        var site = "amazon.com";
        var username = document.getElementById("ap_email").innerText;
        var password = document.getElementById("ap_password").innerText;
    
        console.log("username: "+username);
        console.log("password: "+password);
    },false);

}