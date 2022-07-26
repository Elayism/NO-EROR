
const hamMenu = document.querySelector(".hamburger-menu"); // Ham Menu Button

// Toggles ham menu display

const toggleHamMenuDisplay = () => {
  const hamMenuIcon = document.querySelector("#ham-menu-icon");
  const hamMenuClose = document.querySelector("#ham-menu-close");
  const hamMenuDisplay = document.querySelector(".mobile-nav-menu");
  hamMenuIcon.classList.toggle("hidden");
  hamMenuClose.classList.toggle("hidden");
  hamMenuDisplay.classList.toggle("block");
  hamMenuDisplay.classList.toggle("slide-in-right");
  toggleScrollBar();
};

// Locks scroll when mobile nav menu is open

const toggleScrollBar = () => {
  const body = document.body;
  body.classList.toggle("overflow-hidden");
};

hamMenu.addEventListener("click", toggleHamMenuDisplay);


$("#id01").click(e => {
  if($(e.target).attr("id") == "id01"){
    $("#id01").hide();
  }
})

var modal = document.getElementById('id02');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

