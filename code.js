let username;

const mySubmit = document.getElementById("mySubmit");
mySubmit.onclick = function () {
    username = document.getElementById("myText").ariaValueMax;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}