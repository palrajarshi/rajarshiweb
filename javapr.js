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
  window.open("projindex.html");
}
