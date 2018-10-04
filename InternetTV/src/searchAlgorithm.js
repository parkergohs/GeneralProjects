/* Internet TV
*
*Filename: searchAlgorithm.js	
*
*Notes:
*
*To Do:
*
*/


/*
Video category white/grey/black list
T/F feedback survey to videos suggested
custom set algorithm options
custom default advanced search options
-save as user#.preferedAdvancedSearchSettings{}
white/grey/black list accounts
randomly select 100 acountIDs & videos to display as suggest
Button to reset suggested videos

expand search bar on focus/hover

search for acounts/videos/images/audio/documents
dot tab system

1. Pick 100 (or more) random accounts/videos
2. Sort through filters
3. Display media



Philosophy:
Simplicity is the ultimate sophistication.
Use simple interchangable modules to provide customization base on each person's preferences.
Handle the most important key parts and keep extras to a minimum and/or out of sight as an on-demand option.


Philosophy behind picking 100 random accounts/videos is to provide variety as well as fair exposure regardless of how popular an account is. 
*/

let mediaToDisplay = [100];
let i = 0;
let applySearchAlgorithm = function()
{
 for (; i <= 99; i++)
 {
  mediaToDisplay[i] = i;
 }
 alert("Media Item Num: " + mediaToDisplay + "\n")

// Pick 100 accounts with uploaded media
// random(0, numOfAccounts) 
}
