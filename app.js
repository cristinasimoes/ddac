var subscribe = document.getElementById('subscribeBtn');
var subscribe2 = document.getElementById('subscribeBtn2');
var subscribeTitle = document.querySelector('.subscribe');

var image = document.getElementById('image');
var wrapper2 = document.getElementById('wrapper2');
var title = document.querySelector('.title');
var container2 = document.querySelector('.container2');
var image2 = document.getElementById('image2');
var email = document.getElementById('email');

var formContainer = document.getElementById('formContainer');
var container = document.getElementById('container');
subscribe.addEventListener('click', function(){
    console.log(1);
    image.style.display= "none";
    wrapper2.style.bottom ="-88vh";
    title.style.display= "none";
    container2.style.display= "none";
    image2.style.display= "block";
    email.style.display="none";
    subscribe.style.display="none";
    subscribe2.style.display="block";
    subscribeTitle.innerHTML = "Thanks for your subscription, you will hear from us!";
   
    subscribeTitle.style.width="285px" ;
     // formContainer.style.paddingBottom ="74px";
    container.style.paddingBottom ="66px";

});
subscribe2.addEventListener('click', function(){
    image.style.display= "block";
    wrapper2.style.bottom ="12vh";
    title.style.display= "block";
    container2.style.display= "flex";
    image2.style.display= "none";
    email.style.display="block";
    subscribe.style.display= "block";
    subscribe2.style.display="none";
    subscribeTitle.innerHTML = "Subscribe to get more information";
    subscribeTitle.style.width="194px" ;

    // formContainer.style.paddingBottom ="0";
    container.style.paddingBottom ="100px";


});

