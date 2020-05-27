var likes = 0;
document.getElementById('likes').innerHTML = likes;

function handleSubmit(e){
    e.preventDefault();
    var table = document.getElementById("table-body");
    var row = document.createElement('tr');
    var name = document.createElement('td');
    var email = document.createElement('td');
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    name.innerHTML = inputName.value;
    email.innerHTML = inputEmail.value;
    row.appendChild(name);
    row.appendChild(email);
    table.appendChild(row);
    inputName.value = "";
    inputEmail.value = "";
}

function clickToLike(){
    likes ++;
    document.getElementById('likes').innerHTML = likes;
}