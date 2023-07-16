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
  "/images/array0.jpg",
  "/images/array1.jpg",
  "/images/array2.jpg",
  "/images/array3.jpg",
  "/images/array4.jpg",
  "/images/array5.jpg",
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
  window.location.href = "/docs/index.html";
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