/*
Profile Tabs:
Info
Video
Pix
audio
documents




*/


let numOfAccounts = 0;
let accounts = [];

//create account
let createAccount = function()
{
 numOfAccounts++;

 let 
 accountAlias = document.getElementById("alias").value,
 accountEmail = document.getElementById("email").value,
 accountPassword = document.getElementById("password").value;  
 
 let account0 = new Account(accountAlias, accountEmail, accountPassword); 
	
 alert("Account created.\n\n " +
 
       "Account ID: " + account0.id + "\n" + 
	   "Name/Alias: " + account0.alias + "\n" + 
	   "Email: " + account0.email + "\n" + 
	   "Password: " + account0.pass + "\n" + 
	   "Uploaded Media: " + account0.uploadedMedia.vids[0]
	   );
}

class Account 
{
 constructor(alias, email, pass)
 {
 this.id = numOfAccounts;
 this.alias = alias;	
 this.email = email;
 this.pass = pass; 
 this.subscribedToAccounts = [];
 this.settings = {};	
 this.uploadedMedia = {"vids" : ["testVid0"], "imgs" : {}, "audio" : {}, "docs" : {}};
 this.vids = [];
 this.pics = [];
 this.audio = [];
 this.docs = [];
 }	
}