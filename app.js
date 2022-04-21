// select btn items
const playerBtn1 = document.querySelector('.btn1');
const playerBtn2 = document.querySelector('.btn2');
const resetBtn = document.querySelector('.btn3');
let options = document.querySelector('.select');

// select output items for btns
const plyr1Score = document.querySelector('.plyr1Score');
const plyr2Score = document.querySelector('.plyr2Score');
let scoreLimit = document.querySelector('.limit');

// set starting point
let firstScore = 0;
let secondScore = 0;
let gameOver = false;
let limit = 5;

// score limit selector
options.addEventListener('change', function() {
    scoreLimit.textContent = this.value;
    limit = Number(this.value);
})

// functions for btns
playerBtn1.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
        if (styles.contains('btn1')) {
            firstScore++;
            plyr1Score.textContent = firstScore;
            if(firstScore === limit) {
                gameOver = true;
                scoreLimit.textContent = 'Player 1 wins!';
                scoreLimit.style.fontWeight = 'bold';
                scoreLimit.style.color = 'green';
                playerBtn1.disabled = true;
                playerBtn2.disabled = true;
            }
        } 
});

playerBtn2.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
        if (styles.contains('btn2')) {
            secondScore++;
            plyr2Score.textContent = secondScore;
            if(secondScore === limit) {
                gameOver = true;
                scoreLimit.textContent = 'Player 2 wins!';
                scoreLimit.style.fontWeight = 'bold';
                scoreLimit.style.color = 'green';
                playerBtn1.disabled = true;
                playerBtn2.disabled = true;
            }
        }  
});

resetBtn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
        if (styles.contains('btn3')) {
            firstScore = 0;
            secondScore = 0;
        } 
        reset();
});

function reset() {
        plyr1Score.textContent = firstScore;
        plyr2Score.textContent = secondScore;
        scoreLimit.textContent = 0;
        options.value = 0;
        scoreLimit.style.fontWeight = 'normal';
        scoreLimit.style.color = '#363636';
        gameOver = false;
        playerBtn1.disabled = false;
        playerBtn2.disabled = false;
}
