let root         = document.querySelector(':root'),
    scorePlayer1 = 0,
    scorePlayer2 = 0,
    hasWin       = false,

    playerColors = ['#FFC8C8', '#DEE5FF'],
    playerIcon   = [
        `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M124.489 96.9806L98.5656 71.0567C94.6681 67.1592 94.6681 60.8408 98.5656 56.9433L124.489 31.0194C129.17 26.3387 129.17 18.7508 124.489 14.0701L113.93 3.51051C109.249 -1.17017 101.661 -1.17017 96.9806 3.51051L71.0567 29.4344C67.1592 33.3309 60.8408 33.3309 56.9433 29.4344L31.0194 3.51051C26.3387 -1.17017 18.7508 -1.17017 14.0701 3.51051L3.51051 14.0701C-1.17017 18.7508 -1.17017 26.3387 3.51051 31.0194L29.4344 56.9433C33.3319 60.8408 33.3319 67.1592 29.4344 71.0567L3.51051 96.9806C-1.17017 101.661 -1.17017 109.249 3.51051 113.93L14.0701 124.489C18.7508 129.17 26.3387 129.17 31.0194 124.489L56.9433 98.5656C60.8408 94.6681 67.1592 94.6681 71.0567 98.5656L96.9806 124.489C101.661 129.17 109.249 129.17 113.93 124.489L124.489 113.93C129.17 109.249 129.17 101.661 124.489 96.9806Z" fill="#FB6C7D"/>
        <path d="M35.2516 8.04552L30.723 3.49474C26.087 -1.16492 18.5716 -1.16492 13.9357 3.49474L3.47697 14.0069C-1.15899 18.6666 -1.15899 26.2204 3.47697 30.8801L29.1532 56.6876C33.0134 60.5676 33.0134 66.8576 29.1532 70.7375L3.47697 96.545C-1.15899 101.205 -1.15899 108.759 3.47697 113.418L9.92359 119.899C9.92939 109.945 16.5888 103.777 16.5888 103.777L51.1365 69.0527C56.406 63.7563 56.406 55.169 51.1365 49.8716L30.9571 29.589C26.3859 24.9955 26.2834 17.5797 30.723 12.8598L35.2516 8.04552Z" fill="#A82C3B"/>
        </svg>`, 
        `<svg width="132" height="131" viewBox="0 0 132 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M66 9.5326e-06C83.6292 1.10621e-05 100.203 6.81329 112.669 19.1844C125.135 31.5559 132 48.0043 132 65.5C132 82.9957 125.135 99.4441 112.669 111.816C100.203 124.187 83.6292 131 66 131C48.3708 131 31.7968 124.187 19.3308 111.816C6.86531 99.4441 1.94875e-05 82.9957 2.10287e-05 65.5C2.25699e-05 48.0043 6.86531 31.5559 19.3308 19.1843C31.7968 6.81329 48.3708 8.00308e-06 66 9.5326e-06ZM66 107.973C89.5981 107.973 108.797 88.9196 108.797 65.5C108.797 42.0804 89.5981 23.0274 66 23.0274C42.4019 23.0273 23.2031 42.0804 23.2031 65.5C23.2031 88.9196 42.4019 107.973 66 107.973Z" fill="#8AA4FF"/>
        <path d="M19.3308 111.816C31.7968 124.187 48.3708 131 66 131L66 107.973C42.4019 107.973 23.2031 88.9196 23.2031 65.5C23.2031 42.0804 42.4019 23.0273 66 23.0273L66 0C48.3708 -1.51793e-06 31.7968 6.81328 19.3308 19.1843C6.86531 31.5559 1.49963e-05 48.0043 1.34433e-05 65.5C1.18904e-05 82.9957 6.8653 99.4441 19.3308 111.816Z" fill="#7D76C7"/>
        </svg>`
    ],
    currentPlayer = 0,

    b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    b4 = document.getElementById("b4"),
    b5 = document.getElementById("b5"),
    b6 = document.getElementById("b6"),
    b7 = document.getElementById("b7"),
    b8 = document.getElementById("b8"),
    b9 = document.getElementById("b9"),
    arr  = [b1, b2, b3, b4, b5, b6, b7, b8, b9],
    grid = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9]
    ];

arr.forEach(element => {
    element.addEventListener("click", () => {

        playerPlay(element);
    });
});

const init = () => {
    currentPlayer = 0,
    root.style.setProperty('--test', playerColors[currentPlayer]);
    hasWin = false;
    arr.forEach(element => {
        element.style.backgroundColor = "";
        element.innerHTML = "";
        element.dataset.player = "null";
    });
};

const playerPlay = (element) => {
    
    if (hasWin == false) {
        element.dataset.player = currentPlayer;
        element.style.backgroundColor = playerColors[currentPlayer];
        element.innerHTML = `${playerIcon[currentPlayer]}`;
        checkWinningCondition();
        switchPlayer();
    }
}

const switchPlayer = () => {

    if (hasWin == false) {

        if (currentPlayer === 0) {
            currentPlayer++
        }
        else {
            currentPlayer--
        }
        root.style.setProperty('--test', playerColors[currentPlayer]);
    }
    else {
        root.style.setProperty('--test', 'white');
    }
};

const checkWinningCondition = () => {

    if (checkHorizontal() == 'win') {
        increasePlayerScore();
        hasWin = true;
    }
    else if (checkVertical() == 'win') {
        increasePlayerScore();
        hasWin = true;
    }
    else if (checkDiagonal() == 'win') {
        increasePlayerScore();
        hasWin = true;
    }
    
}

const checkHorizontal = () => {

    for (let i = 0; i < grid.length; i++) {
        const element = grid[i];

        if (element[0].dataset.player != "null") {

            if(element[0].dataset.player == element[1].dataset.player &&
                element[1].dataset.player == element[2].dataset.player &&
                element[2].dataset.player == element[0].dataset.player) 
            {
                
                return 'win';
                
            }
        }
    }
}

const checkVertical = () => {

    for (let i = 0; i < grid[0].length; i++) {
        let line1 = grid[0][i],
            line2 = grid[1][i],
            line3 = grid[2][i];

        if (line1.dataset.player != "null") {

            if (line1.dataset.player == line2.dataset.player &&
                line2.dataset.player == line3.dataset.player &&
                line3.dataset.player == line1.dataset.player) 
            {
                
                    return 'win';
            }
        }
    }
    
    return '';
}

const checkDiagonal = () => {

    if (grid[1][1].dataset.player != "null") {

        if (grid[0][0].dataset.player == grid[1][1].dataset.player &&
            grid[1][1].dataset.player == grid[2][2].dataset.player &&
            grid[2][2].dataset.player == grid[0][0].dataset.player) 
        {
                
            return 'win';
        }
        else if (grid[0][2].dataset.player == grid[1][1].dataset.player &&
            grid[1][1].dataset.player == grid[2][0].dataset.player &&
            grid[2][0].dataset.player == grid[0][2].dataset.player) 
        {
            
            return 'win';
        }
    }
}

const increasePlayerScore = () => {

    if (currentPlayer == 0) {
        scorePlayer1++
        document.querySelector('.x').innerHTML = scorePlayer1;
    }
    else {
        scorePlayer2++
        document.querySelector('.o').innerHTML = scorePlayer2;
    }
}

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    init();
})

init();