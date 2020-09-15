//for (var i = 0; i < window.localStorage.length; i++) {
//    var key = window.localStorage.key(i);
//    var value = window.localStorage.getItem(key);

//    console.log("key:" + key + "£»value:" + value);

//    //var tbAccount = document.getElementById("tbAccount");
//    //if (tbAccount) {
//    //    tbAccount.innerHTML = "<tr><td>amazon.jp</td>" + key + "<td></td><td>" + value + "</td></tr>";
//    //}
//}


$(function () {
    chrome.storage.sync.get({ username: '', password: '' }, function (items) {

        console.log(items.username + "£»" + items.password);

        var tbAccount = document.getElementById("tbAccount");
        if (tbAccount) {
            tbAccount.innerHTML = "<tr><td>amazon.jp</td><td>" + items.username + "</td><td>" + items.password + "</td></tr>";
        }
    });

    //chrome.storage.sync.get(null, function (items) {
    //    var allKeys = Object.keys(items);
    //    console.log(allKeys);
    //    console.log(allKeys[0]);
    //    console.log(allKeys[1]);
    //});
});