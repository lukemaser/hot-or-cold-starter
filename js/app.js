
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
  	var DEBUG_MODE = false;
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

  	/*--- Evaluate the user's guess against randomNumber ---*/
   	function evaluate(guess, random) {
   		if (guess < random) {
   			debug('Cold');
   			$('#guessList').html('<li>Cold</li>');
   		} else if (guess > random) {
   			debug('Hot');
   			$('#guessList').html('<li>Hot</li>');
   		} else if (guess == random) {
   			debug('Correct');
   			$('#guessList').html('<li>Correct</li>');
   		};
   	}

   	/*--- Click event for new game ---*/
   	$('#guessButton').click(function(e) {

   		e.preventDefault();

   		var guess = $('#userGuess').val();
   		/*--- Evaluate if guess is a string or number ---*/
            if (isNaN(guess)) {
                alert("Please enter a integer");
                $('#count').html('0');
            } else {
            	evaluate(guess, randomNumber);

            	$('#count').html(parseInt($('#count').html(), 10) +1);
            };  			
   	});
});


