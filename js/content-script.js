const STORAGE_KEY = "AMZ_AC";

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function () {
    // 注入自定义JS
    //injectCustomJs();

    //console.log("ssssss");
    var signInBtn = document.getElementById("signInSubmit");
    if (signInBtn) {
        signInBtn.addEventListener("click", function () {

            var site = "";
            var form = document.getElementsByName("siginIn");
            if (form.length > 0) {
                site = form[0].action;
            }
            var username = document.getElementById("ap_email").value;
            var password = document.getElementById("ap_password").value;

            var amazonSiteArray = new Array();
            amazonSiteArray.push({ site: site, username: username, password: password });

            var storage = window.localStorage;
            storage.setItem(STORAGE_KEY, JSON.stringify(amazonSiteArray));
            //storage.setItem("password", password);
            //var amazonSite = {
            //    key: STORAGE_KEY,
            //    value: JSON.stringify(amazonSiteArray)
            //};

            chrome.storage.sync.set({ STORAGE_KEY: STORAGE_KEY, amazonSiteArray }, function () {
                console.log("保存成功");
            });

            console.log("site：" + site);
            console.log("username: " + username);
            console.log("password: " + password);

            //Send(username, password);
        }, false);
    }
});

function Send(username, password) {
    //1.创建AJAX对象
    var ajax = new XMLHttpRequest();

    //4.给AJAX设置事件(这里最多感知4[1-4]个状态)
    ajax.onreadystatechange = function () {
        //5.获取响应
        //responseText		以字符串的形式接收服务器返回的信息
        //console.log(ajax.readyState);
        if (ajax.readyState == 4 && ajax.status == 200) {
            var msg = ajax.responseText;
            console.log(msg);
            //alert(msg);
        }
    }

    //2.创建http请求,并设置请求地址
    ajax.open('post', 'http://localhost:29273/api/Account');
    //post方式传递数据是模仿form表单传递给服务器的,要设置header头协议
    ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    //3.发送请求(get--null    post--数据)
    username = encodeURIComponent(username);	//对输入的特殊符号(&,=等)进行编码
    password = encodeURIComponent(password);
    var info = 'username=' + username + '&password=' + password;	//将请求信息组成请求字符串
    console.log(info);
    ajax.send(info);
}


// 向页面注入JS
function injectCustomJs(jsPath) {
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function () {
        // 放在页面不好看，执行完后移除掉
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
}