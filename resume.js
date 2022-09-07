const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

var count = 0;
window.onload = function () {
  document.getElementById("btnPress").onclick = button;
};
function button() {
  var info = document.getElementById("txtName").value;
  console.log("feedback : ", info);

  while (count < 1 && info != "") {
    var thank = document.createElement("span");
    thank.innerText = "Thanks for your feedback ";
    document.getElementById("ThankYou").appendChild(thank);
    count++;
  }
}
