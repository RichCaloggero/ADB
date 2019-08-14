browser.browserAction.onClicked.addListener(function () {
var myDebugger = browser.experiments.adb.attachDebugger();
console.log(myDebugger);
});


