
// --------------------------ENROLL AND UNENROLL----------------------------------

function enroll() {
  var btn = document.getElementById("mybtn");

  if (btn.innerHTML === "Enroll now") {
      btn.innerHTML = "Unenroll now";
  }
  else {
      btn.innerHTML = "Enroll now";
  }
}

