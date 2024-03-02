class Snake {
    constructor(name, imageName, length, origin, diet, venomous, description, lifespan) {
        this.name = name;
        this.imageName = imageName;
        this.length = length;
        this.origin = origin;
        this.diet = diet;
        this.venomous = venomous;
        this.description = description;
        this.lifespan = lifespan;
    }

    getSection() {
        return `<div class="snake-box" data-name="${this.name}">
                    <h1>${this.name}</h1>
                    <img src="${this.imageName}" alt="${this.name}">
                </div>`;
    }

    getExpandedSection() {
        return `<div class="modal-content-flex">
                    <div class="modal-text-content">
                        <h2>${this.name}</h2>
                        <p>Length: ${this.length}</p>
                        <p>Origin: ${this.origin}</p>
                        <p>Diet: ${this.diet}</p>
                        <p>Venomous: ${this.venomous}</p>
                        <p>Description: ${this.description}</p>
                        <p>Lifespan: ${this.lifespan} years</p>
                    </div>
                    <img src="${this.imageName}" alt="${this.name}" class="modal-image">
                </div>`;
    }
    
}

const snakes = [
    new Snake("Black Mamba", "images/black-mamba.jpg", "3 meters", "Africa", "Carnivore", "Highly venomous", "Fast, agile, and one of the deadliest snakes.", 11),
    new Snake("King Cobra", "images/king-cobra.jpg", "4 meters", "Southeast Asia", "Carnivore", "Highly venomous", "The world's longest venomous snake.", 20),
    new Snake("Green Anaconda", "images/green-anaconda.jpg", "5 meters", "South America", "Carnivore", "Non-venomous", "One of the largest and most powerful snakes in the world.", 10),
    new Snake("Corn Snake", "images/corn-snake.jpg", "1.2 meters", "North America", "Carnivore", "Non-venomous", "Popular as pets due to their docile nature.", 6)
];

function displaySnakes() {
    const section = document.getElementById('snakes-section');
    snakes.forEach(snake => {
        section.innerHTML += snake.getSection();
    });
    attachEventListeners();
}

function showModal(snakeName) {
    const snake = snakes.find(s => s.name === snakeName);
    document.getElementById('modal-content').innerHTML = snake.getExpandedSection();
    document.getElementById('snakeModal').style.display = 'block';
}

function attachEventListeners() {
    document.querySelectorAll('.snake-box').forEach(box => {
        box.addEventListener('click', function() {
            const snakeName = this.getAttribute('data-name');
            showModal(snakeName);
        });
    });
}

window.onload = function() {
    displaySnakes();
    attachEventListeners();
};
