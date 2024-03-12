// script.js

const getHouses = async () => {
    const url = 'https://portiaportia.github.io/json/house-plans.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch houses:", error);
    }
};

const getHouseInfo = (house) => {
    // Container for the whole house
    const houseContainer = document.createElement('div');
    houseContainer.className = 'house-container';

    // Top section for image and info
    const topSection = document.createElement('div');
    topSection.className = 'top-section';

    // Image of the house
    const img = document.createElement('img');
    img.className = 'main-image';
    img.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    img.alt = `${house.name}`;
    topSection.appendChild(img);

    // Info section
    const infoSection = document.createElement('div');
    infoSection.className = 'info-section';
    
    const houseName = document.createElement('h2');
    houseName.textContent = house.name;
    infoSection.appendChild(houseName);

    const size = document.createElement('p');
    size.textContent = `Size: ${house.size} square feet`;
    infoSection.appendChild(size);

    const bedrooms = document.createElement('p');
    bedrooms.textContent = `Bedrooms: ${house.bedrooms}`;
    infoSection.appendChild(bedrooms);

    const bathrooms = document.createElement('p');
    bathrooms.textContent = `Bathrooms: ${house.bathrooms}`;
    infoSection.appendChild(bathrooms);

    const featureList = document.createElement('ul');
    house.features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.textContent = feature;
        featureList.appendChild(featureItem);
    });
    infoSection.appendChild(featureList);
    topSection.appendChild(infoSection);

    houseContainer.appendChild(topSection);

    // Bottom section for floor plans
    const bottomSection = document.createElement('div');
    bottomSection.className = 'floor-plans';

    house.floor_plans.forEach(plan => {
        const planImage = document.createElement('img');
        planImage.className = 'floor-plan-image';
        planImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;
        planImage.alt = `${plan.name}`;
        bottomSection.appendChild(planImage);
    });

    houseContainer.appendChild(bottomSection);

    return houseContainer;
};

const showHouses = async () => {
    const houses = await getHouses();
    const housesSection = document.getElementById('houses-section');
    houses.forEach(house => {
        housesSection.appendChild(getHouseInfo(house));
    });
};

window.onload = showHouses;
