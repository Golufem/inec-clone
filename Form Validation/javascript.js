const nameInput  = document.querySelector("#namemi");
const emailInput = document.querySelector("#emailmi");
const msg = document.querySelector("#error");
const btn = document.querySelector("#submitbtn");
const userListmi = document.querySelector("#usersList")

btn.addEventListener("click", addusers);
function addusers(e){
    e.preventDefault();

    if(nameInput.value === "" || emailInput.value===""){
        msg.innerHTML= "<h6> Please enter all the required field</h6>";
        msg.classList.add('error');

        setTimeout(()=> msg.remove(), 2000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode (`${nameInput.value} : ${emailInput.value}`))
        userListmi.appendChild(li);
    }

    nameInput.value = '';
    emailInput.value = '';

}

