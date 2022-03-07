$(document).ready(function () {
    //Using the class we can dynamically get the image elements so we can just write the code that will be used for all images once
    let galleryImagesArray = document.getElementsByClassName("gallery-image");
    
    for(i=0; i<galleryImagesArray.length; i++){
        //For every image we add the listener for a click, so no matter what image they click it will be loaded
        galleryImagesArray[i].addEventListener("click", (event) => {
            lightboxLoad(event);
        });
    }
    
    document.getElementById("image-modal").addEventListener("click", () => {
        document.getElementById("image-modal").style.display = "none";
        //by setting the innerHTML to an empty string it will remove everything
        document.getElementById("image-modal").innerHTML = "";
    });
});

function lightboxLoad(event){
    //Grab the URL of the chosen image
    let imageUrl = event.target.getAttribute("src");
    
    //If modal visible it will be a flexbox for easy centering of elements: css-tricks.com/snippets/css/a-guide-to-flexbox/
    let modalElement = document.getElementById("image-modal");
    modalElement.style.display = "flex";
    
    let imageElement = document.createElement("img");
    imageElement.setAttribute("style", "align-self: center;");
    imageElement.setAttribute("src", imageUrl);
    
    modalElement.appendChild(imageElement);
}