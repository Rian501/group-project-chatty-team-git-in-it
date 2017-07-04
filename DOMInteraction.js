{
	let addMessages = Object.create(null);
	let $output = $("#msg-output");
	let combinedArray = [];

	// adds new user message to private array
	addMessages.addToArray = function() {
		let userNewMsg = $inputBox.val();
		combinedArray.unshift(userNewMsg);
	};

	// takes json array on load and populates the private array
	addMessages.pushJsonToCurrentArray = function(jsonArray) {
		combinedArray = jsonArray;
	}

	// adds message to output box based on passed in ID and Message
  	addMessages.putMsgsInDom = function (id, msg) {
  		let $messageBlock = $("<div>", {id: `${id}`, class: "message-container"})
  		// let messageBlock = document.createElement('div');
		// messageBlock.setAttribute("id", `${id}`);
		// messageBlock.setAttribute("class", "message-container")
		$messageBlock.html (`<p class="msg">${msg}</p><button class="delete-btn">Delete</button>`);
		$output.append($messageBlock);
	}

	// takes an array and pulls out the index and corresponding message, sends to putMsgsInDom
	addMessages.assignIds = function(arrayToBeAssignedIds) {
		for (let i = 0; i < arrayToBeAssignedIds.length; i++) {
			addMessages.putMsgsInDom(i, arrayToBeAssignedIds[i])
		}
	}
	// gives updated array on call
	addMessages.getUserMessages = function() {
		return combinedArray;
	}

	// functionality to change to dark theme or enlarged text
	$("#large-text-box").click(function(){ 
		$(".biggerTextOption").toggleClass("large");
	});

	$("#dark-theme-box").click(function() {
		$(".theme").toggleClass("dark");
	})
	// let addTheme = document.querySelector(".theme");

	// document.getElementById("dark-theme-box").addEventListener("click", function() {
	// 	addTheme.classList.toggle("dark");
	// });

	// document.getElementById("large-text-box").addEventListener("click", function() {
	// 	increaseFontSize.classList.toggle("large");
	// });

	window.Chatty = window.Chatty || {};
	Chatty.DOMInteraction = addMessages;
}
