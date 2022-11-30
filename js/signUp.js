 $(document).ready(function() {
     $(".loader").fadeOut(1000, function() {
         $(".spiner").fadeOut(500)
         $("body").css("overflow", "auto")
     });

 })



 let signupFName = document.getElementById("signupFName")
 let signupLName = document.getElementById("signupLName")
 let signupEmail = document.getElementById("signupEmail")
 let signupPassword = document.getElementById("signupPassword")
 let number = document.getElementById("number")


 let userList = []



 if (localStorage.getItem('user') == null) {
     userList = []
 } else {
     userList = JSON.parse(localStorage.getItem('user'))
 }


 //START SIGN UP
 let signUp = document.getElementById("signUp")
 let message = document.getElementById("message")
 signUp.addEventListener("click", function() {

         if (signupFName.value == "" || signupLName.value == "" || signupEmail.value == "" || signupPassword.value == "" || number.value == "") {
             message.innerHTML = `<span class="text-danger">All inputs is required!</span>`
             return
         }

         for (var i = 0; i < userList.length; i++) {
             if (userList[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
                 message.innerHTML = `<span class="text-danger">Email Already Exist!</span>`
                 return
             }
         }
         if (validateEmail()) {
             if (validatePassward()) {
                 var user = {
                     name: signupFName.value + signupLName.value,
                     email: signupEmail.value,
                     password: signupPassword.value,
                 }
                 console.log(user);
                 userList.push(user)
                 localStorage.setItem("user", JSON.stringify(userList))

                 clearForm()
                 message.innerHTML = `<span class="text-success">Success</span>`
                 window.location.assign("index.html")


             } else {
                 message.innerHTML = `<span class="text-danger">Password must be 8 characters or more!</span>`

             }
         } else {
             message.innerHTML = `<span class="text-danger">Email Not Valid!</span>`

         }

     })
     //END SIGN UP




 //CLEAR FORM AFTER SIGN UP

 function clearForm() {
     signupFName.value = ""
     signupLName.value = ""
     signupEmail.value = ""
     signupPassword.value = ""
     number.value = ""

 }


 // validation
 function validateEmail() {
     var regex = /^[a-z]+@([a-z]+\.)+[a-z]{2,4}$/
     if (regex.test(signupEmail.value)) {
         return true
     } else {
         return false
     }
 }

 function validatePassward() {
     var regex2 = /.{8,}$/
     if (regex2.test(signupPassword.value)) {
         return true
     } else {
         return false
     }
 }