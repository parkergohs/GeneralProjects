/* Mystix O.S.
-
-Filename: mosHome.js
-
-
-
-Notes:
-
-To Do:
-
-
*/

/*
*Reveal main toolbars
*/

/*
function displayToolbars()
{
 if (mouseLocation in top bar area)
 {
  displayTopToolBar(); 
 }
 else if (mouseLocation in right bar area)
 {
  displayRightToolBar();	 
 }
 else if (mouseLocation in bottom bar area)
 {
  displayBottomToolBar();	 
 }
 else if (mouseLocation in left bar area)
 {
  displayLeftToolBar();	 
 }
}
*/

/*
*Display mainToolBarTop boxes
*
*Refactor by using "this"/"get button value" to display selected box and simply hide all other active boxes
*/
var 
mainMenuBox = document.getElementById("mainMenuBox"),
profileBox = document.getElementById("profileBox"),
settingsBox = document.getElementById("settingsBox");

function displayMainMenuBox()
{
 if (mainMenuBox.style.display == "none")
 {
  mainMenuBox.style.display = "inline-block";
 }
 else
 {
  mainMenuBox.style.display = "none";	 
 }	 

 profileBox.style.display = "none";	 
 settingsBox.style.display = "none";
 //hide all other open windows

}

function displayProfileBox()
{
 if (profileBox.style.display == "none")
 {
  profileBox.style.display = "inline-block";
 }
 else
 {
  profileBox.style.display = "none";	 
 }	 
 
 mainMenuBox.style.display = "none";	 
 settingsBox.style.display = "none";
 //hide all other open windows
}

function displaySettingsBox()
{
 if (settingsBox.style.display == "none")
 {
  settingsBox.style.display = "inline-block";
 }
 else
 {
  settingsBox.style.display = "none";	 
 }	 
 
 mainMenuBox.style.display = "none";	 
 profileBox.style.display = "none";	
 //hide all other open windows
}



/*
*Display home screens
*
*Refactor by using "this"/"get button value" to display selected home screen and simply hide all other active screens/windows
*/
var 
mainHomeScreen = document.getElementById("mainHomeScreen"),
artistHomeScreen = document.getElementById("artistHomeScreen"),
scientistHomeScreen = document.getElementById("scientistHomeScreen"),
businessHomeScreen = document.getElementById("businessHomeScreen");

function displayMainHomeScreen()
{
 mainHomeScreen.style.display = "inline-block";	 

 artistHomeScreen.style.display = "none";	 
 scientistHomeScreen.style.display = "none";	
 businessHomeScreen.style.display = "none";
 //hide all other open windows
}

function displayArtistHomeScreen()
{
 artistHomeScreen.style.display = "inline-block";	 
 
 mainHomeScreen.style.display = "none";	 
 scientistHomeScreen.style.display = "none";	
 businessHomeScreen.style.display = "none";
 //hide all other open windows
}

function displayScientistHomeScreen()
{
 scientistHomeScreen.style.display = "inline-block";	 
 
 mainHomeScreen.style.display = "none";	 
 artistHomeScreen.style.display = "none";	
 businessHomeScreen.style.display = "none";
 //hide all other open windows
}

function displayBusinessHomeScreen()
{
 businessHomeScreen.style.display = "inline-block";	 

 mainHomeScreen.style.display = "none";
 artistHomeScreen.style.display = "none"; 
 scientistHomeScreen.style.display = "none";	
 //hide all other open windows
}