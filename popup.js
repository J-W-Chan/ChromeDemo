$(function () {
    //chrome.storage.sync.get({ username: '', password: '', site: '' }, function (items) {

    //    console.log(items.username + "£»" + items.password);

    //    var tbAccount = document.getElementById("tbAccount");
    //    if (tbAccount) {
    //        tbAccount.innerHTML = "<tr><td>" + items.site + "</td><td>" + items.username + "</td><td>" + items.password + "</td></tr>";
    //    }
    //});

    chrome.storage.sync.get(null, function (items) {
        var amazonSites = items["AMZ_AC"];

        //var allKeys = Object.keys(amazonSites);
        console.log(amazonSites);
    });
});