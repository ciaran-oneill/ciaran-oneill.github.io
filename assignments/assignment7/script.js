// Javscript for Assignment 7
// Made by Ciaran O'Neill

var image = document.querySelector('.imageToChange'); // Get the first image element with the class
var firstImage = "images/200x200.jpg"; // First image path
var secondImage = "images/200x200_blue.jpg"; // Second image path

image.addEventListener('click', function() {
if (image.src.includes(firstImage)) {
    image.src = secondImage; // Change to second image
    } else {
        image.src = firstImage; // Change back to first image
}
 }
 );

 document.addEventListener('DOMContentLoaded', function() {
    var imageToRotate = document.querySelector('.imageToRotate'); // Get the first image element with the class 'imageToRotate'
    var slider = document.getElementById('imageSlider');

    slider.addEventListener('input', function() {
        var rotationDegree = slider.value; // Get the current value of the slider
        imageToRotate.style.transform = 'rotate(' + rotationDegree + 'deg)'; // Rotate the image
    });

    var starsDiv = document.querySelector('.stars'); // Get the stars div
    starsDiv.addEventListener('click', function() {
        var starImg = document.createElement('img'); // Create a new img element
        starImg.src = 'images/star.png'; // Set the source of the star image
        starsDiv.appendChild(starImg); // Append the new star image to the stars div
    });
});

 

