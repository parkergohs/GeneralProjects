/* Internet TV
*
*Filename: itvHome.js	
*
*Notes:
*
*To Do:
*
*/

/*************
**************
Toggle Menu Screens
**************
*************/
let 
siteNavMenuScreen = document.getElementById("siteNavMenuScreen"),
mainMenuScreen = document.getElementById("mainMenuScreen"),
settingsMenuScreen = document.getElementById("settingsMenuScreen");

let showSiteNavMenu = function()
{ 
 if (siteNavMenuScreen.style.display == "none")
 {
  siteNavMenuScreen.style.display = "inline-block";	 
 }
 else
 {
  siteNavMenuScreen.style.display = "none";	 
 }
 mainMenuScreen.style.display = "none";	 
 settingsMenuScreen.style.display = "none";	 
}

let showMainMenu = function()
{ 
 if (mainMenuScreen.style.display == "none")
 {
  mainMenuScreen.style.display = "inline-block";	 
 }
 else
 {
  mainMenuScreen.style.display = "none";	 
 }
 siteNavMenuScreen.style.display = "none";	 
 settingsMenuScreen.style.display = "none";	 
}

let showSettingsMenu = function()
{
 if (settingsMenuScreen.style.display == "none")
 {
  settingsMenuScreen.style.display = "inline-block";	 
 }
 else
 {
  settingsMenuScreen.style.display = "none";	 
 }
 siteNavMenuScreen.style.display = "none";	 
 mainMenuScreen.style.display = "none";	 
}


/*************
**************
Toggle Media Search Screens
**************
*************/
let 
vidsScreen = document.getElementById("vidsScreen"),
picsScreen = document.getElementById("picsScreen"),
audioScreen = document.getElementById("audioScreen");
docsScreen = document.getElementById("docsScreen");


let displayVids = function()
{ 
 alert("Displaying vids");
 vidsScreen.style.display = "inline-block";	
 picsScreen.style.display = "none"
 audioScreen.style.display = "none"
 docsScreen.style.display = "none"

}

let displayPics = function()
{ 
alert("Displaying pics");
 vidsScreen.style.display = "none";	
 picsScreen.style.display = "inline-block"
 audioScreen.style.display = "none"
 docsScreen.style.display = "none"
}

let displayAudio = function()
{
 alert("Displaying audio");
 vidsScreen.style.display = "none";	
 picsScreen.style.display = "none"
 audioScreen.style.display = "inline-block"
 docsScreen.style.display = "none"
}

let displayDocs = function()
{
 alert("Displaying docs");
 vidsScreen.style.display = "inline-block";	
 picsScreen.style.display = "none"
 audioScreen.style.display = "none"
 docsScreen.style.display = "none"
}


//*/


let changeScrollColor = function()
{
document.body.style.scrollbarFaceColor="red";
document.body.style.scrollbarArrowColor="blue";
}


/*************
**************
Sign In Validation
**************
*************/
let signIn = function()
{
 if (document.getElementById("accountInput").value == ("me" || "me@g.com") && document.getElementById("passwordInput").value == ("mypassword"))
 {
  alert("Welcome Back, sir!");
  showSettingsMenu();
 }
 else
 {
  alert("Try again"); 
 }
}


/*************
**************
Search functions
**************
*************/
let 
advancedSearchOptions = document.getElementById("advancedSearchOptions");

let toggleAdvancedSearchOptions = function() 
{
 
 if (advancedSearchOptions.style.display == "none")
 {
  advancedSearchOptions.style.display = "block";	 
 }
 else
 {
  advancedSearchOptions.style.display = "none";	 
 }
}

let search = function()
{ 
 applySearchAlgorithm();
 let searchInput = document.getElementById("searchInput").value;
 
 let
 uploadDateSortBy = document.getElementById("uploadDateSortBy").value,
 ratingSortBy = document.getElementById("ratingSortBy").value,
 mediaLanguageOption = document.getElementById("mediaLanguageOption").value,
 subtitleLanguageOption = document.getElementById("subtitleLanguageOption").value;
 
 alert("Searching for: " + searchInput +
       "\n\nWith Options: \n" +
	   "Upload Date: " + uploadDateSortBy + "\n" +
	   "Rating: " + ratingSortBy + "\n" +
       "Media Language: " + mediaLanguageOption + "\n" +
       "Subtitle Language: " + subtitleLanguageOption + "\n" 
 );
 
 window.open("oneMediaSearchedForMedia.html", "_blank");
}

let advancedSearchAlgorithm = function()
{
/*************
1. Loop through all the advanced search fields and save values of each option 

2.

3.
*************/ 
}

