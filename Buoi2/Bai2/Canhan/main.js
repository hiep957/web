function validateForm() {
  var emailInput = document.getElementById("sdtemail");

  var errorElement = document.getElementById("email-error");
  var errorPassword = document.getElementById("password-error");
  var passwordInput = document.getElementById("password");

  var name1 = document.getElementById("name1");
  var name2 = document.getElementById("name2");
  var errorname1 = document.getElementById("name1-error");
  var errorname2 = document.getElementById("name2-error");

  var isValid = true;
  var emailValue = emailInput.value.trim();

  if (name1.value === "") {
    // name1.style.border = "2px solid red";
    errorname1.innerHTML = "Vui lòng nhập Họ.";
    errorname1.style.color = "red";
    isValid = false;
  } else {
    name1.style.border = "";
  }
  if (name2.value === "") {
    // name2.style.border = "2px solid red";
    errorname2.innerHTML = "Vui lòng nhập Tên.";
    errorname2.style.color = "red";
    isValid = false;
  }else {
    name2.style.border = "";
  }
  //Check email empty

  if (emailValue === "") {
    // emailInput.style.border = "2px solid red";
    errorElement.innerHTML = "Vui lòng nhập email hoặc số điện thoại.";
    errorElement.style.color = "red";
    isValid = false;
  } else {
    // Check email format using regular expression
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneFormat = /^\d{10,}$/;
    if (!emailFormat.test(emailValue)&& !phoneFormat.test(emailValue)) {
    //   emailInput.style.border = "2px solid red";
      errorElement.innerHTML = "Định dạng email hoặc số điện thoại không hợp lệ. Email cần đúng định dạng. Số điện thoại cần có 10 số.";
      errorElement.style.color = "red";
      isValid = false;
    } else {
      emailInput.style.border = "";
    }
  }

  //Check password empty
  if (passwordInput.value.trim() === "") {
    // passwordInput.style.border = "2px solid red";
    errorPassword.innerHTML = "Vui lòng nhập mật khẩu.";
    errorPassword.style.color = "red";
    isValid = false;
  } else {
    // Check password length
    if (passwordInput.value.length < 6) {
    //   passwordInput.style.border = "2px solid red";
      errorPassword.innerHTML = "Mật khẩu phải có ít nhất 6 ký tự.";
      errorPassword.style.color = "red";
      isValid = false;
    } else {
      passwordInput.style.border = "";
    }
  }

  return isValid;
}

function hideErrorName1() {
    var errorname1 = document.getElementById("name1-error");
    errorname1.innerHTML = "";
  
}
function hideErrorName2(){
    var errorname2 = document.getElementById("name2-error");
    errorname2.innerHTML = "";
}
function hideErrorElement(){
    var errorElement = document.getElementById("email-error");
    errorElement.innerHTML = "";
}
function hideErrorPassword() {
    var errorPassword = document.getElementById("password-error");
    errorPassword.innerHTML = "";
}

