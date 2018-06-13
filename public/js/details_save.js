function store () {
    var inputUsername= document.getElementById("text11");
    var inputPassword= document.getElementById("text21");
    localStorage.setItem("username", inputUsername.value);
    localStorage.setItem("password", inputPassword.value);
   };
/*
 function save1(){
    let dataObject = {
        username: document.getElementById('textfield1').value,
        password: document.getElementById('textfield2').value
    }
    var data = []
    // Put the object into storage
    if (localStorage.getItem('data')) {
      data = JSON.parse(localStorage.getItem('data'));
      data.push(dataObject);
    } else {
      data = [];
      data.push(dataObject);
    }
    localStorage.setItem('data', JSON.stringify(data));
}*/