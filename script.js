const fourCornerId = ["#top-right", "#top-left", "#down-left", "#down-right"];
const fourCornerString = ["∪", "⊃", "∩", "⊂"]

// render default heart
let currentHeartPosition = 2;
currentHeart = document.querySelector(fourCornerId[currentHeartPosition])
currentHeart.innerHTML = "❤";

function nextHeartPosition(currentHeartPosition) {
    if (currentHeartPosition < 3) {
        return currentHeartPosition + 1;
    } else {
        return 0;
    }
}

function changeHeartPosition() {
    currentHeart.innerHTML = fourCornerString[currentHeartPosition];
    // new "current"
    currentHeartPosition = nextHeartPosition(currentHeartPosition);
    currentHeart = document.querySelector(fourCornerId[currentHeartPosition]);
    currentHeart.innerHTML = "❤";
}



x = document.querySelector("#x");
x.addEventListener("click", changeHeartPosition)



// countdown timer copied from
// https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "❤❤❤❤❤";
    }
  }, 1000);