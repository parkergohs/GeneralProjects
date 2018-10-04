/*************
**************
Toggle Menu Screens
**************
*************/
var 
siteNavMenuScreen = document.getElementById("siteNavMenuScreen"),
mainMenuScreen = document.getElementById("mainMenuScreen"),
settingsMenuScreen = document.getElementById("settingsMenuScreen");

var showSiteNavMenu = function()
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

var showMainMenu = function()
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

var showSettingsMenu = function()
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
var 
vidsScreen = document.getElementById("vidsScreen"),
picsScreen = document.getElementById("picsScreen"),
audioScreen = document.getElementById("audioScreen");
docsScreen = document.getElementById("docsScreen");


var displayVids = function()
{ 
 alert("Displaying vids");
 vidsScreen.style.display = "inline-block";	
 picsScreen.style.display = "none"
 audioScreen.style.display = "none"
 docsScreen.style.display = "none"

}

var displayPics = function()
{ 
alert("Displaying pics");
 vidsScreen.style.display = "none";	
 picsScreen.style.display = "inline-block"
 audioScreen.style.display = "none"
 docsScreen.style.display = "none"
}

var displayAudio = function()
{
 alert("Displaying audio");
 vidsScreen.style.display = "none";	
 picsScreen.style.display = "none"
 audioScreen.style.display = "inline-block"
 docsScreen.style.display = "none"
}

var displayDocs = function()
{
 alert("Displaying docs");
 vidsScreen.style.display = "inline-block";	
 picsScreen.style.display = "none"
 audioScreen.style.display = "none"
 docsScreen.style.display = "none"
}


//*/


var changeScrollColor = function()
{
document.body.style.scrollbarFaceColor="red";
document.body.style.scrollbarArrowColor="blue";
}

document.onload(changeScrollColor());


/*************
**************
Sign In Validation
**************
*************/
var signIn = function()
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
var 
advancedSearchOptions = document.getElementById("advancedSearchOptions");

var toggleAdvancedSearchOptions = function() 
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

var search = function()
{ 
 applySearchAlgorithm();
 var searchInput = document.getElementById("searchInput").value;
 
 var
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

var advancedSearchAlgorithm = function()
{
/*************
1. Loop through all the advanced search fields and save values of each option 

2.

3.
*************/ 
}

