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


function CheckPass(){

  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var pass = document.getElementById("pass").value;
  var alertpass = document.getElementById("pass-alert");

  if(re.test(pass)){
    alertpass.innerHTML = "";
  }else{
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
