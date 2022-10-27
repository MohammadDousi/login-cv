function CheckMail() {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var temp = document.getElementById("email").value;
  var alertemail = document.getElementById("email-alert");

  if (re.test(temp)) {
    alertemail.innerHTML = "";
  } else {
    alertemail.innerHTML = "You have entered an invalid email address!";
  }
}

function CheckPass() {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var pass = document.getElementById("pass").value;
  var alertpass = document.getElementById("pass-alert");

  if (re.test(pass)) {
    alertpass.innerHTML = "";
  } else {
    alertpass.innerHTML = "You have entered an invalid password!";
  }
}

function ShowPass() {
  var eye = document.getElementById("eye");
  var pass = document.getElementById("pass");
  eye.onclick = function () {
    if (pass.type === "text") {
      pass.type = "password";
      eye.style.color = "#667085";
    } else {
      pass.type = "text";
      eye.style.color = "#e74747";
    }
  };
}

function SignFocus() {
  document.getElementById("email").focus();
}

function ShowAside() {
  var a = document.getElementById("aside");
  a.style.display = "block";
}

function CloseAside() {
  var a = document.getElementById("aside");
  a.style.display = "none";
}

const li = document.getElementById('li-change-ui');
const div = document.getElementById('change-ui');

li.addEventListener("mouseenter", function () {
  div.style.display = "block";
})
div.addEventListener("mouseleave", function () {
  div.style.display = "none";

})

const div_lang = document.getElementById('change-lang');
const li_lang = document.getElementById('li-change-lang');

li_lang.addEventListener("mouseenter", function () {
  div_lang.style.display = "block";
})
div_lang.addEventListener("mouseleave", function () {
  div_lang.style.display = "none";

})




const s_up = document.getElementById("btn-scroll-to-up");

s_up.addEventListener("click", function () {

  var id = null;
  var pos = window.scrollY;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos <= Number(0)) {
      clearInterval(id);
    } else {
      pos -= 35;
      window.scrollTo(0, pos);
      console.log(pos);
    }
  }
})










function lightMode() {

  const r = document.querySelector(':root');
  r.style.setProperty('--background', '#fff');
  r.style.setProperty('--textcolor-black', '#000');
  r.style.setProperty('--textcolor-white', '#fff');
  r.style.setProperty('--back-dropdown', '#EAF0F7');
  r.style.setProperty('--shadow-btn-accunt', '0px 8px 15px #00000020');
  r.style.setProperty('--footer-background', '#1d262d');
  // r.style.setProperty('--header-background','#EAF0F7');

}


function DarkMode() {
  const r = document.querySelector(':root');
  r.style.setProperty('--background', '#14162E');
  r.style.setProperty('--textcolor-black', '#fff');
  r.style.setProperty('--textcolor-white', '#000');
  r.style.setProperty('--back-dropdown', '#0a0d26');
  r.style.setProperty('--shadow-btn-accunt', '0px 8px 15px #ffffff20');
  r.style.setProperty('--footer-background', '#070818');
  // r.style.setProperty('--header-background','#070818');

}