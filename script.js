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