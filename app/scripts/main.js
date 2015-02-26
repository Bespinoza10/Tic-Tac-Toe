'use strict'

var fb    = new Firebase ('https://ticytacytoey.firebaseio.com/'),
    piece = 'X',
    board = {a1:'', a2:'', a3:'', b1:'', b2:'', b3:'', c1:'', c2:'', c3:''};


$('td').on('click', function(){
	var $td = $(this).closest("td");

	if ($td.text() == '') {

		$td.text(piece);

		board.a1 = $('#one').text();
		board.a2 = $('#two').text();
		board.a3 = $('#three').text();
		board.b1 = $('#four').text();
		board.b2 = $('#five').text();
		board.b3 = $('#six').text();
		board.c1 = $('#seven').text();
		board.c2 = $('#eight').text();
		board.c3 = $('#nine').text();


		gameWinLogic(piece);


	  	if(piece === 'X') {
			piece = 'O';
		} else {
			piece = 'X';
		}

		$('#currentMove').text('Next move: ' + piece);
	} else {
		alert ('Yo, stop cheetin');
	}
	//$td.unbind('click');
});

//winning logic

function gameWinLogic(piece) {


	if (board.a1 === piece && board.a2 === piece && board.a3 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} else if (board.b1 === piece && board.b2 === piece && board.b3 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} else if (board.c1 === piece && board.c2 === piece && board.c3 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} else if (board.a1 === piece && board.b1 === piece && board.c1 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} else if (board.a2 === piece && board.b2 === piece && board.c2 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} else if (board.a3 === piece && board.b3 === piece && board.c3 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} else if (board.a1 === piece && board.b2 === piece && board.c3 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} else if (board.a3 === piece && board.b2 === piece && board.c1 === piece) {
		$('#winner').text('Hey, good on you, ' + piece + ' you won! (Just click here!)');
	} if (board.a1 && board.a2 && board.a3 && board.b1 && board.b2 && board.b3 && board.c1 && board.c2 && board.c3) {
		$('#winner').text('Try again, '+ piece + ' it\'s a tie :( (Just click here!)');
	}

};

$('#winner').click(function(){
	$('td').empty();
	$('#winner').empty();
	$('#currentMove').empty();
	piece = 'X';
});


// winConditions = [
//   [board.a1, board.a2, board.a3],
//   [board.b1, board.b2, board.b3],
//   [board.c1, board.c2, board.c3],
//   [board.a1, board.b1, board.c1],
//   [board.a2, board.b2, board.c2],
//   [board.a3, board.b3, board.c3],
//   [board.a1, board.b2, board.c3],
//   [board.a3, board.b2, board.c1],
// ];
