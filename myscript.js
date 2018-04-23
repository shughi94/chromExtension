var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: KidLol; src: url("'
        + chrome.extension.getURL('mike.ttf')
        + '"); }';
document.head.appendChild(fa);


function switchFont(){

  var posts = document.getElementsByClassName("_5pbx userContent _3576");

  for(var i = 0; i < posts.length;i++) {
    posts[i].style.fontFamily = "KidLol";
    posts[i].style.fontSize = "x-large";
  }
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    if (request.action == "log"){
      switchFont();
    }
  });
