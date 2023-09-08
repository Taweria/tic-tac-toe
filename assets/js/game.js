let scorePlayer1 = 0;
    scorePlayer2 = 0;

    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    b4 = document.getElementById("b4");
    b5 = document.getElementById("b5");
    b6 = document.getElementById("b6");
    b7 = document.getElementById("b7");
    b8 = document.getElementById("b8");
    b9 = document.getElementById("b9");
    arr = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

for (let i = 0; i < arr.length; i++) {
       arr[i].addEventListener("click", changeColor(arr[i].id));
}


function changeColor(domId) {
    document.getElementById(domId).style.backgroundColor = '#DEE5FF';
}
