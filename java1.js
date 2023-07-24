//Image change

// var images = [
//   "/images/fashion8.jpg",
//   "/images/fashion1.jpg",
//   "/images/fashion3.jpg",
//   "/images/fashion4.jpg",
//   "/images/fashion5.jpg",
//   "/images/fashion6.jpg",
//   "/images/fashion7.jpg",
//   "/images/fashion8.jpg",
//   "/images/fashione2.jpg",
// ];
var images = [
  "images/array0.jpg",
  "images/array1.jpg",
  "images/array2.jpg",
  "images/array3.jpg",
  "images/array4.jpg",
  "images/array5.jpg",
];

var currentIndex = 0;
var styleImage = document.getElementById("styleImage");

function changeImage(direction) {
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (direction === "previous") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  styleImage.src = images[currentIndex];
}
setInterval(function () {
  changeImage("next");
}, 2500);

// Link back
function goToAnotherPage() {
  window.location.href = "index.html";
}
function goToAnotherPage1() {
  window.location.href = "https://accounts.google.com/v3/signin/identifier?dsh=S2097283958%3A1690168414613349&hl=en-GB&ifkv=AeDOFXibo31lCQQkUFc3xttjUTLeRjDB5B5EP-GFlBYMG0puIYphsQz-PqCYlZ3A7WhARElj9Fri7g&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
}
function twitter() {
  window.open(
    "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den",
    "_blank"
  );
}
function insta() {
  window.open("https://www.instagram.com/", "_blank");
}
function fb() {
  window.open("https://www.facebook.com/", "_blank");
}
function linkedin() {
  window.open("https://in.linkedin.com/", "_blank");
}

// Countdown Timer
const targetDate = new Date("2023-07-30T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    document.getElementById(
      "homerightitems"
    ).innerHTML = `<p class="para-secondary bg-secondary">Sale Started!</p>`;
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("homerightitems").innerHTML = `
    <p class="para-primary para-1">Sale Starts in:</p>
    <p class="para-secondary bg-secondary">Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</p>`;
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
