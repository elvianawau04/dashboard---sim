// script.js

// Functionality for data input, storage, display, and management of melon cultivation data

let melonData = [];

// Function to add a new melon entry
function addMelonEntry(entry) {
    melonData.push(entry);
    displayMelonData();
}

// Function to display all melon entries
function displayMelonData() {
    const displayArea = document.getElementById('melonDataDisplay');
    displayArea.innerHTML = '';
    melonData.forEach(melon => {
        const div = document.createElement('div');
        div.innerText = `Type: ${melon.type}, Weight: ${melon.weight}, Date Planted: ${melon.datePlanted}`;
        displayArea.appendChild(div);
    });
}

// Sample usage
const sampleMelon = { type: 'Watermelon', weight: '10kg', datePlanted: '2026-02-14' };
addMelonEntry(sampleMelon);

