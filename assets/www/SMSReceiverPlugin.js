var SMSReceiverPlugin = function()
{}

SMSReceiverPlugin.prototype.register = function(eventCallback, successCallback, failureCallback)
{
	
    return PhoneGap.exec(successCallback, failureCallback, 'SMSReceiverPlugin', 'register',
    		[{callback : eventCallback}]);
}


SMSReceiverPlugin.prototype.unregister = function( successCallback, failureCallback )
{
    return PhoneGap.exec(successCallback, failureCallback, 'SMSReceiverPlugin', 'unregister', [{}]); 
};

PhoneGap.addConstructor(function()
{
	//Register the javascript plugin with PhoneGap
	PhoneGap.addPlugin('SMSReceiverPlugin', new SMSReceiverPlugin());
});

function smscallback(data)
{
    console.log("inside callback, sms received: " + data);
    
	var txt = "";
	txt += "<b>Number:</b> " +  data.origin + "<br />";
	txt += "<b>Message:</b> " + data.body + "<br />";
	txt += "<b>Date/Time of sms:</b> " + data.time + "<br />";
	txt += "<b>ID:</b> " + data.id + "<br />";
	
	
	document.getElementById("inbox").innerHTML = txt;
	
	navigator.notification.alert(
    'SMS received',  // message
    alertDismissed,         // callback
    'SMS notification',            // title
    'Done'                  // buttons
	);
	
	function alertDismissed() {
		console.log("Alert Dismissed // Do something" + data);
    }
	
}