window.onload = function () {
    //console.log("ssssss");
    var signInBtn = document.getElementById("signInSubmit");
    if (signInBtn) {
        signInBtn.addEventListener("click", function () {
            //var site = "amazon.com";
            var username = document.getElementById("ap_email").value;
            var password = document.getElementById("ap_password").value;

            var storage = window.localStorage;

            storage.setItem("username", username);
            storage.setItem("password", password);

            console.log("username: " + username);
            console.log("password: " + password);
        }, false);
    }
};

