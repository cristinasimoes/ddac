var subscribe = document.getElementById('subscribeBtn');
var subscribe2 = document.getElementById('subscribeBtn2');
var subscribeTitle = document.querySelector('.subscribe');

var image = document.getElementById('image');
var wrapper2 = document.getElementById('content');
var image = document.getElementById('image');
var email = document.getElementById('email');
var body = document.getElementsByTagName('body');

var formContainer = document.getElementById('formContainer');
var container = document.getElementById('containerTitle');
var content = document.getElementById('content');



subscribe.addEventListener('click', function(){
    document.body.style.backgroundImage ="none";
    image.src = "media/gif.gif"
    email.style.display="none";
    subscribe.style.display="none";
    subscribe2.style.display="block";
    subscribeTitle.innerHTML = "Thanks for your subscription, you will hear from us!";
    content.style.top="57%";

    // container.style.paddingBottom ="66px";
    // container.style.marginTop ="-163px";
});
subscribe2.addEventListener('click', function(){
    document.body.style.backgroundImage ="url('media/bg-image.png')";
    image.src = "media/title.png"
    email.style.display="block";
    subscribe.style.display= "block";
    subscribe2.style.display="none";
    subscribeTitle.innerHTML = "Subscribe to get more information";
    content.style.top="65%";
    // container.style.marginTop ="0";
    // container.style.paddingBottom ="100px";
});

