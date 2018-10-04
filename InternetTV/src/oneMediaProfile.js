//Profile info/image changing
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) 
{
 showDivs(slideIndex += n);
}

function showDivs(n) 
{
 var i;
 var x = document.getElementsByClassName("mySlides");
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



var addImgToGallery = function()
{
 alert("Add an image to profile gallery");	
}

var deleteImgFromGallery = function()
{
 alert("Are you sure you want to delet this image from your profile gallery");	
}

var editImgGallery = function()
{
 alert("Displaying you image gallery");	
}