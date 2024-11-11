function upDate(previewPic) {
    // Select the div with id "image"
    let imageDiv = document.getElementById('image');
    
    // Change the background image of the div with the image source of the preview image
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    
    // Change the text of the div to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;
}
  
function unDo() {
    // Select the div with id "image"
    let imageDiv = document.getElementById('image');
    
    // Reset the background image to the original state (empty)
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text to the original content
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
