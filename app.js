

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("mainB").onclick = richify;
});

//

function richify() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "log"}, function(response) {
      console.log('sent!');
    });
  });

}
