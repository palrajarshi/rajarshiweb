function vanish() {
  let doc = document.querySelector("#sect-1");
  doc.classList.toggle("hidden");
}

//Link to Pages
function linktopage() {
  window.open(
    "https://accounts.google.com/v3/signin/identifier?dsh=S-2080075079%3A1689310134601345&hl=en-GB&ifkv=AeDOFXiRdCCyDt7vqZr2Tu2hkjtOJR3Ck61gHenaQ2HtLhqrhcOU31E_ufmHM0l-KfcXKXZJ6vPu5g&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
    "_blank"
  );
}
function linktonext() {
  window.open("indexproj.html");
}

// Navbar Show/hide

let fetch = document.getElementById("navbar");
fetch.addEventListener('mouseover', () => {
  if (fetch.classList.contains("navbar-hidden")) {
    fetch.classList.remove("navbar-hidden");
    fetch.classList.add("navbar-visible");
  } else {
    fetch.classList.add("navbar-visible");
  }
});
fetch.addEventListener("mouseout", () => {
  fetch.classList.remove("navbar-visible");
  fetch.classList.add("navbar-hidden");
  console.log("snbah")
});
