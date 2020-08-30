//generator 1 to 6
const firstRandomNum =
Math.floor(Math.random()*6)+1
//images/dice1.png upto images/dice6.png
const firstdiceimag = 'assets/dice' +
firstRandomNum +'.png';

document.querySelectorAll
('img')[0].setAttribute('src',firstdiceimag);

//generator 1 to 6
const secondRandomNum =
Math.floor(Math.random()*6)+1
//images/dice1.png upto images/dice6.png
const seconddiceimag = 'assets/dice' +
secondRandomNum +'.png';

document.querySelectorAll
('img')[1].setAttribute('src', seconddiceimag);

//logic for winner
if(firstRandomNum > secondRandomNum){
    document.querySelector
    ('h1').innerHTML = 'The Winner is User 1';
} else if (firstRandomNum < secondRandomNum){
    document.querySelector
    ('h1').innerHTML = 'The Winner is User 2';
}else {
    document.querySelector
    ('h1').innerHTML = "it's a DRAW"
}
