 $(document).ready(function() {
     $(".loader").fadeOut(1000, function() {
         $(".spiner").fadeOut(500)
         $("body").css("overflow", "auto")
     });
 })

 var signinEmail = document.getElementById("signinEmail")
 var signinPassword = document.getElementById("signinPassword")


 if (localStorage.getItem('user') == null) {
     userList = []
 } else {
     userList = JSON.parse(localStorage.getItem('user'))
 }

 console.log(';');

 //START SIGN IN
 var signIn = document.getElementById("signIn")

 signIn.addEventListener("click", function() {
     for (var i = 0; i < userList.length; i++) {
         if (userList[i].email.toLowerCase() == signinEmail.value.toLowerCase() && userList[i].password.toLowerCase() == signinPassword.value.toLowerCase()) {
             window.location.assign("Home.html")
             clear()
             return

         }
         document.getElementById("incorrect").innerHTML = `<span class="text-danger">Email or Password incorrect</span>`

     }

 })


 function clear() {
     signinEmail.value = ""
     signinPassword.value = ''
 }