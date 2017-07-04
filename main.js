Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.assignIds, Chatty.DOMInteraction.pushJsonToCurrentArray);

let $inputBox = $('#msg-input');
let $clear = $('#clear-btn');
let $output = $("#msg-output");


$inputBox.keypress(function() {
	if ($inputBox.val() !== '' && event.key === 'Enter') {
		Chatty.DeleteMess.clearElement();
		Chatty.DOMInteraction.addToArray();
		Chatty.DOMInteraction.assignIds(Chatty.DOMInteraction.getUserMessages());
		$inputBox.val('');
		Chatty.DeleteMess.disableBtn();
	}
});

$clear.click(function() {
	Chatty.DeleteMess.clearArr(Chatty.DOMInteraction.getUserMessages())
	Chatty.DeleteMess.clearElement();
	Chatty.DeleteMess.disableBtn();
});

///this neeeds WOOOOORK!
document.on "click", function() {
	if (event.target.classList.contains("delete-btn")) {
		let parentID = event.target.parentNode.getAttribute("id");
		Chatty.DeleteMess.removeMessage(parentID);
		Chatty.DeleteMess.removeFromArray(Chatty.DOMInteraction.getUserMessages(), parentID);
		Chatty.DeleteMess.clearElement();
		Chatty.DOMInteraction.assignIds(Chatty.DOMInteraction.getUserMessages())
	}
});