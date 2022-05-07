chrome.action.onClicked.addListener(function(tab) {
	chrome.tabs.create({ url: 'http://meet.google.com/new' });
}); 