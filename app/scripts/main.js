'use strict'

var fb    = new Firebase ('https://ticytacytoey.firebaseio.com/'),
    piece = 'x',
    board = ['','','','','','','','',''];


$('tbody').on('click','td', function(event){
	var $td = $(this).closest("td");
	$td.text(piece);
	if(piece === 'x') {
		piece = 'o';
	} else {
		piece = 'x';
	}
board[0] = $('#one').text();
board[1] = $('#two').text();
board[2] = $('#three').text();
board[3] = $('#four').text();
board[4] = $('#five').text();
board[5] = $('#six').text();
board[6] = $('#seven').text();
board[7] = $('#eight').text();
board[8] = $('#nine').text();
});


//check td #id for value
//store value in board array

