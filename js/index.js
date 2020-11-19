const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;
const progress = document.querySelector(".progress-bar-wrapper");
const progressbarpercents  = [25,20,15];

const sections = document.querySelectorAll("section");
const navbarlinks = document.querySelectorAll(".navbar-link");

var Email=document.form.email;
var submit=document.form.button;
var phone=document.form.phoneNo;

submit.onclick=function(){
  ValidateEmail(Email);
  phonenumber(phone);
};

function ValidateEmail(inputText)
{
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}

function phonenumber(inputtxt)
{
  var phoneformat = /^\d{10}$/;
  if(inputtxt.value.match(phoneformat))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
}

window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

sections.forEach(function(section,i){
	if(window.pageYOffset>=section.offsetTop-10)
	{
		navbarlinks.forEach(function(navbarlink){
			navbarlink.classList.remove("change");
		});
		navbarlinks[i].classList.add("change");
	}
});

if(window.pageYOffset+window.innerHeight>=progress.offsetTop){
document.querySelectorAll(".progress-percent").forEach(function(el,i){
	el.style.width=`${progressbarpercents[i]}%`;
	// el.previousElementSibling.firstElementChild.textContent=progressbarpercents[i];
});
}

}

myFunction();

// window.onresize = function() {window.location.reload();};