'use strict'

var fb    = new Firebase ('https://ticytacytoey.firebaseio.com/'),
    piece = 'X',
    board = {a1:'', a2:'', a3:'', b1:'', b2:'', b3:'', c1:'', c2:'', c3:''},
    winConditions;




$('tbody').on('click','td', function(event){
	var $td = $(this).closest("td");
	$td.text(piece);
	if(piece === 'X') {
		piece = 'O';
	} else {
		piece = 'X';
	}

	$('#currentMove').text('Next move: ' + piece);

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

});

//winning logic

function gameWinLogic(piece) {

	if (board.a1 === piece && board.a2 === piece && board.a3 === piece) {
		alert(piece + ' won!');
		location.reload();
	} else if (board.b1 === piece && board.b2 === piece && board.b3 === piece) {
		alert(piece + ' won!');
		location.reload();
	} else if (board.c1 === piece && board.c2 === piece && board.c3 === piece) {
		alert(piece + ' won!');
		location.reload();
	} else if (board.a1 === piece && board.b1 === piece && board.c1 === piece) {
		alert(piece + ' won!');
		location.reload();
	} else if (board.a2 === piece && board.b2 === piece && board.c2 === piece) {
		alert(piece + ' won!');
		location.reload();
	} else if (board.a3 === piece && board.b3 === piece && board.c3 === piece) {
		alert(piece + ' won!');
		location.reload();
	} else if (board.a1 === piece && board.b2 === piece && board.c3 === piece) {
		alert(piece + ' won!');
		location.reload();
	} else if (board.a3 === piece && board.b2 === piece && board.c1 === piece) {
		alert(piece + ' eight!');
		location.reload();
	} else {
		console.log('keep going');
	}

};

winConditions = [
  [board.a1, board.a2, board.a3],
  [board.b1, board.b2, board.b3],
  [board.c1, board.c2, board.c3],
  [board.a1, board.b1, board.c1],
  [board.a2, board.b2, board.c2],
  [board.a3, board.b3, board.c3],
  [board.a1, board.b2, board.c3],
  [board.a3, board.b2, board.c1],
];
