
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});
    /*--- Debug help ---*/
  	var DEBUG_MODE = true;
  	var debug = function(msg) {
  		if (DEBUG_MODE == true) {
  			console.log('DEBUG:', msg);
  		}
  	}
   	 	
  	/*--- Generate random number at parse time ---*/
  	var randomNumber = newGame();

  	$('.new').click(function() {
  		debug('New Game'); 	

  		randomNumber = newGame();

  		$('#guessList').html('');

  		$('#userGuess').val('');

  		$('#count').html('0');
   	});

  	/*--- Generate random number ---*/
   	function newGame() {	

		var randomNumber = Math.floor(Math.random() * 101);

		debug(randomNumber);

		return randomNumber;
  	}

  	/*--- Evaluate range of guess ---*/
  		function between(x, min, max) {
  			return x >= min && x <= max;
  		}

  	/*--- Evaluate the user's guess against randomNumber ---*/
   	function evaluate(guess, random) {
      if (guess == random) {
        debug('Correct');
        $('#guessList').html('<li>Correct</li>');
      } else if (guess > (random - 5) && guess < (random + 5)) {
        debug('Hot');
        $('#guessList').html('<li>Hot</li>');
      } else if (guess > (random - 10) && guess < (random + 10)) {
        debug('Warmer');
   			$('#guessList').html('<li>Warmer...</li>');
   		} else if (guess > (random - 15) && guess < (random + 15)) {
   			debug('Warm');
   			$('#guessList').html('<li>Warm, guess again.</li>');
   		} else if (guess > (random - 30) && guess < (random + 30)) {
        debug('Cool');
        $('#guessList').html('<li>Cool</li>');
      } else if (guess > (random - 40) && guess <= (random + 40)) {
   			debug('Cold');
   			$('#guessList').html('<li>Cold</li>');
   		} else if (guess < random || guess > random) {
        debug('Ice Cold');
        $('#guessList').html('<li>Ice Cold</li>');
      };
   	}

   	/*--- Click event for new game ---*/
   	$('#guessButton').click(function(e) {

   		e.preventDefault();

   		var guess = $('#userGuess').val();
   		/*--- Evaluate if guess is a string or number ---*/
            if (isNaN(guess)) {
                alert("Please enter an integer");
                $('#count').html('0');
            } else {
            	
            	//$('#guessList').append(guess + '<br/>');
            	$('#count').html(parseInt($('#count').html(), 10) +1);
            };  			
            evaluate(guess, randomNumber);
   	});


});


