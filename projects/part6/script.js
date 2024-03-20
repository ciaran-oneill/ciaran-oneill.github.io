const toggleHamburger = () => {
  document.getElementById("nav-items").classList.toggle("hide");
};

window.onload = () => {
  document.getElementById("hamburger").onclick = toggleHamburger;
  fetchPlayerStats("json/players.json"); 
};

const fetchPlayerStats = async (fileName) => {
  try {
      const response = await fetch(fileName);
      const data = await response.json();
      displayPlayerStats(data.players);
  } catch (error) {
      console.error("Fetching player stats failed:", error);
  }
};

const displayPlayerStats = (players) => {
  const container = document.getElementById("player-stats");
  container.innerHTML = ''; // Clear previous content
  const table = document.createElement("table");

  // Create table header
  const headerRow = table.insertRow();
  const headers = ["Name", "Position", "Team", "PPG", "RPG", "APG", "SPG", "BPG", "Field Goal %"];
  headers.forEach(headerText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  // Populate table rows with player information
  players.forEach(player => {
    const row = table.insertRow();
    
    // Insert player image and name in the first column
    const nameCell = row.insertCell();
    const playerImage = document.createElement("img");
    playerImage.src = player.img_name;
    playerImage.alt = player.name;
    playerImage.classList.add("player-image");
    nameCell.appendChild(playerImage);
    nameCell.appendChild(document.createTextNode(player.name));

    // Insert position, team, stats, etc.
    row.insertCell().textContent = player.position;
    row.insertCell().textContent = player.team;
    player.stats.forEach(stat => {
      row.insertCell().textContent = stat;
    });
  });

  container.appendChild(table);
};


document.getElementById('contactForm').addEventListener('submit', async function(event) {
  const form = event.target;
  const formData = new FormData(form);
  const formFeedback = document.getElementById('formFeedback');
  
  try {
      console.log('Form data to send:', Object.fromEntries(formData.entries()));
      
      formFeedback.textContent = 'Message sent successfully!';
      formFeedback.className = 'message success';
      setTimeout(() => {
          formFeedback.textContent = '';
          formFeedback.className = 'message';
      }, 2000);
  } catch (error) {
      formFeedback.textContent = 'An error occurred. Please try again.';
      formFeedback.className = 'message error';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Access the 'Add Player' button and the form
  const openFormBtn = document.getElementById('open-form-btn');
  const addPlayerForm = document.getElementById('add-player-form');
  const successMessage = document.getElementById('success-message');
  const playerStatsDiv = document.getElementById('player-stats');

  // Function to display the form
  openFormBtn.addEventListener('click', function() {
    addPlayerForm.style.display = 'block';
  });

  // Function to handle form submission
  addPlayerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Extracting form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const position = document.getElementById('position').value;
    const team = document.getElementById('team').value;
    const ppg = document.getElementById('ppg').value;
    const rpg = document.getElementById('rpg').value;
    const apg = document.getElementById('apg').value;
    const spg = document.getElementById('spg').value;
    const bpg = document.getElementById('bpg').value;
    const fgp = document.getElementById('fgp').value;

    // Append new player data to the 'player-stats' div or other desired location
    playerStatsDiv.innerHTML += `<div>${firstName} ${lastName} - ${position}, ${team} - PPG: ${ppg}, RPG: ${rpg}, APG: ${apg}, SPG: ${spg}, BPG: ${bpg}, FG%: ${fgp}</div>`;

    // Display success message
    successMessage.classList.remove('hide');
    setTimeout(() => successMessage.classList.add('hide'), 2000); // Hide success message after 2 seconds

    // Hide the form again
    addPlayerForm.style.display = 'none';

    // Optionally, reset the form fields
    addPlayerForm.reset();
  });
});
