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


const div = document.getElementById('change-ui');
function ShowDropdown() {
  div.style.display = "block";
}
function UnShowDropDown(){
  div.style.display = "none";
}

// r.style.setProperty('--background', '#14162E');


function lightMode(){

  const r = document.querySelector(':root');
  r.style.setProperty('--background', '#fff');
  r.style.setProperty('--textcolor-black', '#000');
  r.style.setProperty('--textcolor-white', '#fff');
  r.style.setProperty('--back-dropdown', '#EAF0F7');
  r.style.setProperty('--shadow-btn-accunt', '0px 8px 15px #00000020');
  r.style.setProperty('--footer-background','#1d262d');
}


function DarkMode(){
  const r = document.querySelector(':root');
  r.style.setProperty('--background', '#14162E');
  r.style.setProperty('--textcolor-black', '#fff');
  r.style.setProperty('--textcolor-white', '#000');
  r.style.setProperty('--back-dropdown', '#0a0d26');
  r.style.setProperty('--shadow-btn-accunt', '0px 8px 15px #ffffff20');
  r.style.setProperty('--footer-background','#070818');
}