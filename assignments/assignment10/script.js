// JavaScript for Assignment 10
// Made by Ciaran O'Neill

// Define an array of advertisement texts
const advertisements = [
    "This is such a good advertisement.",
    "This class is awesome.",
    "Portia is the best professor ever.",
    "I love my life.",
    "Please give me 100%"
];

// Current advertisement index
let currentIndex = 0;

// Function to display the current advertisement
function displayAdvertisement() {
    // Get the advertisement-text element by its ID
    const adElement = document.getElementById('advertisement-text');
    // Update its text content with the current advertisement from the array
    adElement.textContent = advertisements[currentIndex];

    // Move to the next advertisement, or loop back to the first if at the end
    currentIndex = (currentIndex + 1) % advertisements.length;
}

// Call displayAdvertisement immediately to ensure the first item is shown when the page loads
displayAdvertisement();

// Use setInterval to change the advertisement every 2 seconds
setInterval(displayAdvertisement, 2000);

// Define an array of objects, each containing the image filename and its attribution
const imagesInfo = [
    {
        src: 'images/snow.jpg',
        attribution: 'https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4',
        attributionText: 'Image by wirestock on Freepik'
    },
    {
        src: 'images/small-house.jpg',
        attribution: 'https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4',
        attributionText: 'Image by wirestock on Freepik'
    },
    {
        src: 'images/mountain-lake.jpg',
        attribution: 'https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7',
        attributionText: 'Image by vecstock on Freepik'
    },
    {
        src: 'images/golden.jpg',
        attribution: 'https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4',
        attributionText: 'Image by wirestock on Freepik'
    },
    {
        src: 'images/garden.jpg',
        attribution: 'https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4',
        attributionText: 'Image by wirestock on Freepik'
    }
];

// Function to display the images with attributions
function displayImagesWithAttributions() {
    // Get the images section by its ID
    const imagesSection = document.getElementById('images');

    // Loop through each imageInfo object
    imagesInfo.forEach(imageInfo => {
        // Create the img element
        const img = document.createElement('img');
        img.src = imageInfo.src;
        imagesSection.appendChild(img); // Append the img element to the images section

        // Create the attribution paragraph and link
        const attributionP = document.createElement('p');
        const attributionLink = document.createElement('a');
        attributionLink.href = imageInfo.attribution;
        attributionLink.textContent = imageInfo.attributionText;
        attributionLink.target = "_blank"; // Open in a new tab
        attributionP.appendChild(attributionLink);
        imagesSection.appendChild(attributionP); // Append the attribution to the images section
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayImagesWithAttributions);

