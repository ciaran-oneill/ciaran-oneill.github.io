// JavaScript for Assignment 8 // 
// By Ciaran O'Neill //

document.addEventListener('DOMContentLoaded', function() {
    var toggleArrow = document.getElementById('toggleArrow');
    var exercises = document.getElementById('exercises');
    var exercise1Button = document.getElementById('exercise1');
    var exercise2Button = document.getElementById('exercise2');
    var enterCommandSection = document.querySelector('.enter-command');
    var yogaSliderSection = document.querySelector('.yoga-slider');
    var commandInput = document.getElementById('enter-command-text');
    var commandImage = enterCommandSection.querySelector('img'); // Assuming there's only one image in this section
    var yogaSlider = document.getElementById('yoga-slider-bar');
    var yogaImage = document.querySelector('.yoga-slider img'); // Assuming there's only one image in this section

    // Toggle exercises container
    toggleArrow.addEventListener('click', function() {
        exercises.classList.toggle('hidden');
        toggleArrow.textContent = exercises.classList.contains('hidden') ? '↓' : '↑';
    });

    // Toggle to "Enter Command" section for Exercise 1
    exercise1Button.addEventListener('click', function() {
        enterCommandSection.classList.remove('hidden');
        yogaSliderSection.classList.add('hidden');
    });

    // Toggle to "Yoga Slider" section for Exercise 2
    exercise2Button.addEventListener('click', function() {
        enterCommandSection.classList.add('hidden');
        yogaSliderSection.classList.remove('hidden');
    });

    // Change image based on input
    commandInput.addEventListener('input', function() {
        var lastChar = commandInput.value.slice(-1).toLowerCase(); // Get the last character and convert to lower case
        switch (lastChar) {
            case 'b':
                commandImage.src = 'images/read.jpg';
                break;
            case 'c':
                commandImage.src = 'images/clown.jpg';
                break;
            case 'p':
                commandImage.src = 'images/birthday.jpg';
                break;
            case 'r':
                commandImage.src = 'images/rain.jpg';
                break;
            case 's':
                commandImage.src = 'images/shovel.jpg';
                break;
            case 'w':
                commandImage.src = 'images/work.jpg';
                break;
            default:
                commandImage.src = 'images/original.jpg'; // Default image if the last character doesn't match
        }
    });

    // Adjust yoga image based on slider position
    yogaSlider.addEventListener('input', function() {
        var sliderValue = parseInt(yogaSlider.value, 10);
        var imageNumber = Math.ceil(sliderValue / (100 / 8)); // Divide the range into 8 segments

        if (imageNumber < 1) imageNumber = 1; // Ensure the image number is at least 1
        if (imageNumber > 8) imageNumber = 8; // Ensure the image number does not exceed 8

        yogaImage.src = `images/yoga${imageNumber}.jpg`;
    });
});
