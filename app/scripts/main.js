'use strict'

var fb = new Firebase ('https://ticytacytoey.firebaseio.com/');
var piece = 'x';

var board = ['','','','','','','','',''];
$('tbody').on('click','td', function(event){
	var $td = $(this).closest("td");
	$td.text(piece);
	if(piece === 'x') {
		piece = 'o';
	} else {
		piece = 'x';
	};
});