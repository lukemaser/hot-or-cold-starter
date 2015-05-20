
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
   	 	
    function clearGuess() {
      $('#userGuess').val('');
    } 
  	/*--- Generate random number at parse time ---*/
  	var randomNumber = newGame();

  	$('.new').click(function() {
  		debug('New Game'); 	

  		randomNumber = newGame();

  		$('#guessList').html('');

      clearGuess();

  		$('#count').html('0');
   	});

  	/*--- Generate random number ---*/
   	function newGame() {	

		var randomNumber = Math.floor(Math.random() * 101);

		debug(randomNumber);

		return randomNumber;
  	}

    function printToDOM(temp) {
      $('#feedback').html('<h2>' + temp + '</h2>');
    }

  	/*--- Evaluate range of guess ---*/
  		

  	/*--- Evaluate the user's guess against randomNumber ---*/
   	function evaluate(guess, random) {
      var distance = Math.abs(guess-random);

      if (guess == random) {
        debug('Correct');
        printToDOM('Correct');//$('#feedback').html('<h2>Correct</h2>');
      } else if (distance < 5 /*(random - 5) && guess < (random + 5)*/) {
        debug('Hot');
        printToDOM('Hot');
      } else if (distance < 10 /*(random - 10) && guess < (random + 10)*/) {
        debug('Warmer');
   			printToDOM('Warmer');
   		} else if (distance < 15 /*(random - 15) && guess < (random + 15)*/) {
   			debug('Warm');
   			printToDOM('Warm');
   		} else if (distance < 30 /*(random - 30) && guess < (random + 30)*/) {
        debug('Cool');
        printToDOM('Cool');
      } else if (distance < 40 /*(random - 40) && guess <= (random + 40)*/) {
   			debug('Cold');
   			printToDOM('Cold');
   		} else if (guess < random || guess > random) {
        debug('Ice Cold');
        printToDOM('Ice Cold');
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

            $('#guessList').append('<li>' + guess + '</li>');
            evaluate(guess, randomNumber);
            clearGuess();            
            //previousGuess = currentGuess;
            //currentGuess = guess;
   	});
    //var currentGuess = null;
    //var previousGuess = null;
});