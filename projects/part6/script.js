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

document.getElementById("open-form-btn").addEventListener("click", function() {
  document.getElementById("add-player-form").style.display = "block";
});

document.getElementById("add-player-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way
  // Here you would normally handle form data, e.g., sending it to a server
  console.log("Form submitted");
  document.getElementById("add-player-form").style.display = "none";
  const successMessage = document.getElementById("success-message");
  successMessage.classList.remove("hide");
  setTimeout(function() {
      successMessage.classList.add("hide");
  }, 2000); // Hide success message after 2 seconds
});


