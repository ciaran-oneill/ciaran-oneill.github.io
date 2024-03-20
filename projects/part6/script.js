window.onload = () => {
  // Fetch player stats from JSON file
  fetchPlayerStats("json/players.json");

  // Add event listener to the 'Add Player' button
  document.getElementById("open-form-btn").addEventListener("click", () => {
      document.getElementById("add-player-form").style.display = "block";
  });

  // Add event listener to the form submission
  document.getElementById("add-player-form").addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      // Gather form data
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const position = document.getElementById("position").value;
      const team = document.getElementById("team").value;
      const ppg = document.getElementById("ppg").value;
      const rpg = document.getElementById("rpg").value;
      const apg = document.getElementById("apg").value;
      const spg = document.getElementById("spg").value;
      const bpg = document.getElementById("bpg").value;
      const fgp = document.getElementById("fgp").value;

      // Validate form data
      if (!firstName || !lastName || !position || !team || !ppg || !rpg || !apg || !spg || !bpg || !fgp) {
          alert("Please fill in all fields.");
          return;
      }

      // Append new player data to the 'player-stats' div
      const playerStatsDiv = document.getElementById("player-stats");
      playerStatsDiv.innerHTML += `<div>${firstName} ${lastName} - ${position}, ${team} - PPG: ${ppg}, RPG: ${rpg}, APG: ${apg}, SPG: ${spg}, BPG: ${bpg}, FG%: ${fgp}</div>`;

      // Display success message
      const successMessage = document.getElementById("success-message");
      successMessage.classList.remove("hide");
      setTimeout(() => {
          successMessage.classList.add("hide");
      }, 2000);

      // Hide the form
      document.getElementById("add-player-form").style.display = "none";
  });
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
  container.innerHTML = ""; // Clear previous content
  const table = document.createElement("table");

  // Create table header
  const headerRow = table.insertRow();
  const headers = ["Name", "Position", "Team", "PPG", "RPG", "APG", "SPG", "BPG", "Field Goal %"];
  headers.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
  });

  // Populate table rows with player information
  players.forEach((player) => {
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
      player.stats.forEach((stat) => {
          row.insertCell().textContent = stat;
      });
  });

  container.appendChild(table);
};
