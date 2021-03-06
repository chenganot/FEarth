enyo.kind({
	name: "App",
	kind: enyo.Control,
	layoutKind: "FittableRowsLayout",
	fit: true,
	components: [
	{kind: "Signals", ondeviceready: "deviceReady"},
	{kind: "onyx.Toolbar", content: "F*** the little earth"},
	{kind: "enyo.Scroller", components: [
	{tag: "label", content: "Your Account"},
	{tag: "br"},
        {kind: "onyx.InputDecorator", components:
		[
	{kind: "onyx.Input", name: "account", placeholder: "Account", onchange: "inputedA"}
		]},

	{tag: "br"},
	{tag: "label", content: "Your Password"},
	{tag: "br"},
        {kind: "onyx.InputDecorator", components:
		[
	{kind: "onyx.Input", name: "password", placeholder: "Password", onchange: "inputedP"}
		]},

	{tag: "br"},
        
	{kind: "Checkbox", checked: true, content: "Remember your account and password", onchange: "changed"},
	
	{tag: "br"},
	{kind: "onyx.Button", content: "Sign in", onclick: "tapped"},
	{kind: "onyx.Button", content: "Sing out", onclick: "outTapped"},

	{tag: "br"}
	]},
	{kind: "enyo.Scroller", fit: true, components:[
		{name: "messages", allowHtml: true}
		]},

	{kind: "onyx.Toolbar", content: "Version: 1.0.0"}
	],

deviceReady: function(){

},

tapped: function(inSender, inEvnet){
	var ipAddr = "10.100.61.3";
	var acc = this.$.account.getValue();
	var pss = this.$.password.getValue();
	var severURL = "http://"+ipAddr+"/";
	var loginSend = "DDDDD="+acc+"&upass="+pss+"&0MKKey=%B5%C7%C2%BC+Login";
	if (acc == 0 || pss ==0) 
		this.$.messages.addContent("</br>please input your account and password  </br>");
	else
		{
			var myAjax = new enyo.Ajax({ url: severURL});
			myAjax.go({
				q: loginSend
			});
			myAjax.response(this, "handleResponse");
			myAjax.error(this, "handleError");


		}
},

outTapped: function(inSender, inEvnet){
	var ipAddr = "10.100.61.3";
	var outServer = "http://"+ ipAddr +"/"+"F.htm";
	var outAjax = new enyo.Ajax({
		url: outServer
	});
	outAjax.go();
	outAjax.error(this, "processErrors");
},

inputedA: function(inSender, inEvnet){
},

inputedP: function(inSender, inEnent){
	//var password = this.$.getValue()
},

changed: function(inSender, inEvent){
	//setChecked(!this.checked)
},

handleResponse: function(inSender, inResponse){
	this.$.messages.addContent("</br>Login Successful!  </br>")	
},

handleErrors: function(inSender, inResponse){
	this.$.messages.addContent("</br>Login failed, try again or close the app...  </br>")	      
},

processErrors: function(inSender, inResponse){		       
	this.$.messages.addContent("</br>sign out!   </br>")
}

});
