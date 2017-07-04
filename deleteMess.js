{
	let deleteMess = Object.create(null);
	// let clear = document.getElementById("clear-btn");

	// removes message from DOM based on id given
	deleteMess.removeMessage = function(id) {
		let currentElement = document.getElementById(id);
		currentElement.remove();
	}
	// takes the ID of one of the msg divs and deletes it from base array;
	deleteMess.removeFromArray = function(msgArray, id) {;
		msgArray.splice(id, 1);
	}

	// clear button empties array of messages
	deleteMess.clearArr = function (arrayToClear) {
		arrayToClear.length = 0;
	}

	// clear button removes text from msg div
	deleteMess.clearElement = function () {
		$output.html("");
	}

	// Checks to see if there are any messages, if not: disables clear button.
	deleteMess.disableBtn = function () {
		if  ($output.html === '') {
	    $clear.disabled = true;
		} else {
	    $clear.disabled = false;
		}
	};

	window.Chatty = window.Chatty || {};
	Chatty.DeleteMess = deleteMess;
}