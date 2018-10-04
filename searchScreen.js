/* Template
*
*Filename: searchScreen.js	
*
*Notes:
*
*To Do:
*Create Account Class/Objects to store history for viewed/unviewed & saved/unsaved info
*/


class MediaItem
{
 constructor(title, coverImgSrc, fileSrc, description, publicOrPrivate)
 {
  this.title = title;
  this.coverImgSrc = coverImgSrc;
  this.fileSrc = fileSrc;
  this.description = description;
  this.publicOrPrivate;
  //this.uploadDate = uploadDate; //get automatic timestamp	 
 }
}

var mediaItem1 = new MediaItem();
mediaItem1.title = "title 1";
var searchResultsArray = [mediaItem1];

function beginSearch()
{
 alert(searchResultsArray[0]);
 alert(mediaItem.title);
 
 //getSearchFormInfo();
 //applySearchAndFiltersToCollection();
 //displaySearchResults(); 
}



/*
*Get Search Form Info
*/
function getSearchFormInfo()
{
	
}


/*
*Apply Search Options To Public Media Collection   
*/
//applySearchToCollection();




/*
*Create Test Media Collection
*/