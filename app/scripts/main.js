'use strict'

var fb    = new Firebase ('https://ticytacytoey.firebaseio.com/'),
    piece = 'X',
    open,
    board = {a1:'', a2:'', a3:'', b1:'', b2:'', b3:'', c1:'', c2:'', c3:''};
// newGame.set({board});

fb.child('---game').once('value', function(snap) {
  open = snap.val();
  if (open % 2 == 0) {
    console.log('if')
    fb.limitToLast(1).once('value', function(snap) {
      var keyArr = _.keys(snap.val());
      game = new Firebase('https://ticytacytoey.firebaseio.com/' + keyArr[0]);
      game.set({player1: false});
      gameTime(game);
    });
    fb.child('---game').set(1);
  } else {
    console.log('else')
    var game = fb.push();
    game.set({
      board: board,
      player1: true
    })
    fb.child('---game').set(2)
    gameTime(game);
  }
})

function gameTime(game) {
  console.log(game)
  game.on('value', function(snap) {
    board = snap.child('board').val();
    var player1 = snap.child('player1').val();
    console.log(player1)

    $('#a1').text(board.a1);
    $('#a2').text(board.a2);
    $('#a3').text(board.a3);
    $('#b1').text(board.b1);
    $('#b2').text(board.b2);
    $('#b3').text(board.b3);
    $('#c1').text(board.c1);
    $('#c2').text(board.c2);
    $('#c3').text(board.c3);

    if(player1) {
      piece = 'X';
    } else {
      piece = 'O';
    }

    $('td').on('click', function(){

	    var $td = $(this).closest("td");

  	  // if (!$td.text()) {
      board[$td.prop('id')] = piece;

      if(player1) {
        piece = 'X';
      } else {
        piece = 'O';
      }

      game.set({board: board})


  		gameWinLogic(piece);

    	// 	$('#currentMove').text('Next move: ' + piece);
    	// } else {
      //   $('#currentMove').text('Already taken, try again');
    	// }
    });
  });
}
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
		$('#winner').text('Try again, it\'s a tie :(  (Just click here!)');
	}

};

$('#winner').click(function(){
	$('td').empty();
	$('#winner').empty();
	$('#currentMove').empty();
	piece = 'X';
	board = {a1:'', a2:'', a3:'', b1:'', b2:'', b3:'', c1:'', c2:'', c3:''};
});


//Firebasee Stuff

// Login
// $('#login').click(function() {
//   var $form = $($(this).closest('form'));
//   var email = $form.find('[type="email"]').val();
//   var password = $form.find('[type="password"]').val();
//   var loginData = {email: email, password: password};
//   userLogin(loginData);
// });

// function userLogin(loginData) {
// 	fb.authWithPassword(loginData, function(err) {
// 	  if (err) {
// 	    $('.error').text('Please enter a valad email address and password');
// 	  } else {
//   	  $('.gameBox').toggleClass('hidden');
// 		  $('.loginForm').toggleClass('hidden');
// 	  }
// 	});
// }

//   //REGISTER OR LOGIN FUNCTION//
//   $('#createUser').click(function() {
//     var $form = $($(this).closest('form'));
//     var email = $form.find('[type="email"]').val();
//     var password = $form.find('[type="password"]').val();
//     var loginData = {email: email, password: password};

//     registerAndLogin(loginData, function(err) {
//       if (err) {
//         $('.error').text('Please enter a valaid email address and password');
//       } else {
//         $('.gameBox').toggleClass('hidden');
//         $('.loginForm').toggleClass('hidden');
//       }
//     });
//   });

//   //REGISTER AND LOGIN FUNCTION//
//   function registerAndLogin(obj, cb) {
//     fb.createUser(obj, function(err) {
//       if (!err) {
//         fb.authWithPassword(obj, function(err, auth) {
//           if (!err) {
//             cb(null, auth);
//           } else {
//             cb(err);
//           }
//         });
//       } else {
//         cb(err);
//       }
//     });
//   }
