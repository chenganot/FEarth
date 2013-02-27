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
	{kind: "onyx.Button", content: "Sign in", ontap: "tapped"},
	{kind: "onyx.Button", content: "Sing out", ontap: "outTapped"},

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
	var acc = this.$.account.getValue();
	var pss = this.$.password.getValue();
	if (acc == 0 || pss ==0) 
		this.$.messages.addContent("</br>please input your account and password</br>");
	else
		this.$.messages.addContent("</br></br>account: "+ acc +"</br> password: "+ pss +"</br>");
},

outTapped: function(inSender, inEvnet){
	this.$.messages.addContent("</br></br>you always sign out...</br>")
},

inputedA: function(inSender, inEvnet){
},

inputedP: function(inSender, inEnent){
	//var password = this.$.getValue()
},

changed: function(inSender, inEvent){
	//setChecked(!this.checked)
}

});
