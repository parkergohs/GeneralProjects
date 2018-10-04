/* Internet TV
*
*Filename: itvAccountInfo.js	
*
*Notes:
*
*To Do:
*
*/
let nextId = 0;

class Account
{
 constructor(id, email, pass, alias)
 {
  this.id = id;
  this.email = email;
  this.pass = pass;
  this.alias = alias;
 } 	
}

let account0 = new Account(nextId, "testemail@abcmail.com", "testpass", "testalias");

alert("New Account Created: \n" + account0.alias);

 
/***
*Make section for saving accounts to local storage, until SQL db can be used
*
*/
function addAccountToDatabase()
{
 	
}