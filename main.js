const form = document.querySelector("#submit-form");
const msg = document.querySelector(".msg");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const btn = document.querySelector(".btn");
const users = document.querySelector("#users");

btn.addEventListener("click", submitUsers);

function submitUsers(e) {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please Fill Out The Empty Fields!";

    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    msg.classList.add("success");
    msg.innerHTML = "Filled Out Completely!";
    const header = document.createElement("h4");

    // Create li to append to ul
    header.appendChild(
      document.createTextNode(`${name.value} : ${email.value}`),
    );

    users.appendChild(header);

    // Clear Values
    name.input = "";
    email.input = "";
  }
}
