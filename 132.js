const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});


todoList.addEventListener("click" , (e)=>{
  if(e.target.classList.contains("remove")){
    const targetli = e.target.parentNode.parentNode;
    targetli.remove()
    console.log(targetli);
   
}
if( e.target.classList.contains("done")){
    const  lispan = e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration = "line-through"
    console.log(lispan);
}
})





//                                        form-2

const signupform = document.getElementById("signup-form");

signupform.addEventListener("submit",(e)=>{
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmpassword").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const about = document.getElementById("about").value.trim();

    if (username === ""  || username.includes("@") ) {
      alert("Please enter a username.");
      return;
  }

  if (password === "") {
      alert("Please enter a password.");
      return;
  }

  if (confirmPassword === "") {
      alert("Please confirm your password.");
      return;
  }

 
  if (password.length < 6) {
    alert("Password must be at least six characters long.");
    return;
}

if (!/[A-Z]/.test(password)) {
    alert("Password must contain at least one uppercase letter.");
    return;
}

if (!/[@#$]/.test(password)) {
    alert("Password must contain at least one special symbol (@, #, $, etc.).");
    return;
}

if (confirmPassword === "") {
  alert("Please confirm your password.");
  return;
}

if (password !== confirmPassword) {
  alert("Passwords do not match.");
  return;
}

if (phone === "") {
  alert("Please enter a phone number.");
  return;
}

if (!/^\d{10}$/.test(phone)) {
  alert("Phone number must be exactly 10 digits and contain only numbers.");
  return;
}


if (email === "") {
  alert("Please enter an email address.");
  return;
}

if (!/^\w+([\.-]?\w+)*@gmail\.com$/.test(email)) {
  alert("Please enter a valid Gmail email address (name@gmail.com).");
  return;
}

  if (about === "") {
      alert("Please provide some information about yourself.");
      return;
  }


  if (about.length<20){
    alert("please write minimum 20 words ")
    return;
  }

 
  signupform.submit();

});




