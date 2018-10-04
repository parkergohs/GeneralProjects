/* Internet TV
*
*Filename: itvChannelBar.js
*
*
*
*Notes:
*
*To Do:
*
*/
function changeChannelLeft()
{
 alert("Changing channel left");	
}

function changeChannelRight()
{
 alert("Changing channel right");	
}

function goToChosenChannel()
{
  var chosenChannelInput = document.getElementById("chosenChannelInput").value; //trim leading 0s, white space, etc
  alert("Changing channel to: " + chosenChannelInput); 
  /*
  1. if (!chosenChannelInput.exists())
  {
   popup alert channel doesn't exist
  }
  2. retreive account info of chosen channel
  3. load account's OnAir video and video library over comment area
  */
}
	
function goToRandomChannel()
{
  alert("Changing channel to random channel");
}