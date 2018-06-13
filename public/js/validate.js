/*function xyz(){
   
    //pass = prompt("please enter the password to access");
    if (pass== "11111"&&uname == "ravindra") {
    
    } else {
    
    }
}
*/

function login() {
    var pass,uname;
    uname=document.getElementById('text1').value;
    pass=document.getElementById('text2').value;
    console.log(uname);
    console.log(pass);
    var inputUsername = localStorage.getItem("username");
    var inputPassword = localStorage.getItem("password");
    console.log(inputUsername);
    console.log(inputPassword);
    if(inputPassword.toString === uname.toString && inputPassword.toString == pass.toString)
    {
        console.log("ram");
        document.location.href = "file:///home/ra.dhaka/gittest/view/manager.html";
    }
    else{
        document.write("The password you've is enter is incorrect");
    }
}