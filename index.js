// // Your code here
// // You have to get the element from the HTML file in order to give it action
// let dodger = document.getElementById("dodger");

// // Using style to change backgroundColor
// dodger.style.backgroundColor = "#FF69B4";

// // Move the element up, bottom, left, and right
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";

// //document?
// // is the 'key' javascript word?
// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });
// //The parseInt method is to convert the String to an int

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
//       if (left > 0){
//       dodger.style.left = `${left - 5}px`;}
//     }
//   });


//   document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
//       if (left > 0){
//       dodger.style.left = `${left + 5}px`;}
//     }
//   });


  var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})