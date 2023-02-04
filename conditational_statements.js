(function() {
    var random_num = Math.floor(Math.random()*10) + 1;
    var input_num = prompt("Guess the number between 1 and 10");
    if (input_num < 1 || input_num > 10) {
        alert('the input number is not between 1 and 10');

    } else if (random_num == input_num) {
        alert('Good Work');
    } else {
        alert('Not matched, the random number is: ' + random_num);
    }

})();