{
	let loadMessages = Object.create(null);
	let messages = [];

// retrieves messages from JSON file
	loadMessages.retrieveMessages = function (assignIdFunc, jsonArrayFunc) {
		$.ajax({
			url: "preload.json"
		})
		.done(function(data) {
			arrayUpMessages(data.preloaded_messages);
			assignIdFunc(messages);
			jsonArrayFunc(messages);			
		});
	}

 // takes array of objects and returns an array of strings, the 'messages'
	function arrayUpMessages (aBigMess) {
		aBigMess.forEach(function(smallMess) {
			messages.push(smallMess.message);
		})
	}

	window.Chatty = window.Chatty || {};
	Chatty.LoadMessages = loadMessages;
}