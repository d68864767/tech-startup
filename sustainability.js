// Array of sustainability impact stats
const impactStats = [
    {
        title: 'Carbon Footprint Reduction',
        value: '50%',
        icon: 'carbon-footprint-icon.png'
    },
    {
        title: 'Energy Saved',
        value: '200kWh',
        icon: 'energy-saved-icon.png'
    },
    {
        title: 'Recycled Materials Used',
        value: '75%',
        icon: 'recycled-materials-icon.png'
    },
    // Add more stats as needed
];

// Function to create a stat element
function createStatElement(stat) {
    // Create container div
    const statDiv = document.createElement('div');
    statDiv.classList.add('impact-stat');

    // Create icon img
    const iconImg = document.createElement('img');
    iconImg.src = stat.icon;
    iconImg.alt = stat.title + ' Icon';
    statDiv.appendChild(iconImg);

    // Create title h3
    const titleH3 = document.createElement('h3');
    titleH3.textContent = stat.title;
    statDiv.appendChild(titleH3);

    // Create value p
    const valueP = document.createElement('p');
    valueP.textContent = stat.value;
    statDiv.appendChild(valueP);

    return statDiv;
}

// Function to initialize sustainability section
function initSustainability() {
    // Get sustainability section
    const sustainabilitySection = document.getElementById('sustainability');

    // Create and append each stat
    impactStats.forEach(stat => {
        const statElement = createStatElement(stat);
        sustainabilitySection.appendChild(statElement);
    });
}

// Call initSustainability on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initSustainability);
