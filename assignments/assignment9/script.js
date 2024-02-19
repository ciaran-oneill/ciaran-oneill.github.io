// JavaScript for Assignment 9 //
// Written by Ciaran O'Neill // 
document.addEventListener('DOMContentLoaded', function() {
    const toggleLink = document.getElementById('toggle-animation');
    const ball = document.getElementById('ball');
    const ballContainer = document.querySelector('.ball-container');
    let intervalId = null;
    let direction = 1; // 1 for down, -1 for up
    let position = 0; // Start from the top

    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (intervalId !== null) {
            // If the ball is already bouncing, clicking the link will stop it
            clearInterval(intervalId);
            intervalId = null;
            toggleLink.textContent = 'Start';
        } else {
            // Start moving the ball
            intervalId = setInterval(function() {
                // Calculate the next position
                position += direction * 2; // Change 2 to adjust speed
                if (position <= 0) {
                    direction = 1; // Change direction to down
                    position = 0; // Reset position to top to prevent going above container
                } else if (position >= ballContainer.clientHeight - ball.clientHeight) {
                    direction = -1; // Change direction to up
                    position = ballContainer.clientHeight - ball.clientHeight; // Adjust to prevent going below container
                }

                // Update the position of the ball
                ball.style.transform = `translateY(${position}px)`;
            }, 10); 

            toggleLink.textContent = 'Stop';
        }
    });
    function showDescription(event) {
        // Hide all descriptions
        var yogaTexts = document.querySelectorAll('.yoga p');
        for (var i = 0; i < yogaTexts.length; i++) {
            yogaTexts[i].style.display = 'none';
        }

        // Show the description for the clicked image
        var yogaParagraph = event.currentTarget.nextElementSibling;
        yogaParagraph.style.display = 'block';
    }

    // Attach the onclick event to all images using a for loop
    var yogaImages = document.querySelectorAll('.yoga img');
    for (var i = 0; i < yogaImages.length; i++) {
        yogaImages[i].addEventListener('click', showDescription);
    }
});
