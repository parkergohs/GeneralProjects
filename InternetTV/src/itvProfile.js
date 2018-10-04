/* Internet TV
*
*Filename: itvProfile.css	
*
*Notes:
*
*To Do:
*
*/

//Profile info/image changing
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) 
{
 showDivs(slideIndex += n);
}

function showDivs(n) 
{
 let i;
 let x = document.getElementsByClassName("mySlides");
 if (n > x.length) 
 {
  slideIndex = 1;
 } 
 if (n < 1) 
 {
  slideIndex = x.length;
 }
 for (i = 0; i < x.length; i++) 
 {
    x[i].style.display = "none"; 
 }
 x[slideIndex-1].style.display = "block"; 
 x[slideIndex-1].style.height = '90%';
 x[slideIndex-1].style.width = '90%';
}

let addImgToGallery = function()
{
 alert("Add an image to profile gallery");	
}

let deleteImgFromGallery = function()
{
 alert("Are you sure you want to delet this image from your profile gallery");	
}

let editImgGallery = function()
{
 alert("Displaying you image gallery");	
}


/*
* Buttons to show different profile tabs
*/
let 
onAirArea = document.getElementById("onAirArea"),
showsArea = document.getElementById("showsArea");
//infoArea = document.getElementById("infoArea");

let displayProfileOnAir = function()
{ 
 if (onAirArea.style.display == "none")
 {
  onAirArea.style.display = "inline-block";	 
 }
 else
 {
  onAirArea.style.display = "none";	 
 }
 showsArea.style.display = "none";	 
 //info.style.display = "none";	 
}

let displayProfileShows = function()
{ 
 if (showsArea.style.display == "none")
 {
  showsArea.style.display = "inline-block";	 
 }
 else
 {
  showsArea.style.display = "none";	 
 }
 onAirArea.style.display = "none";	 
 //info.style.display = "none";	 
}