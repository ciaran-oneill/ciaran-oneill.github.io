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
    
    // Insert player name in the first column
    const nameCell = row.insertCell();
    nameCell.textContent = player.name;

    // Insert position, team, stats, etc.
    row.insertCell().textContent = player.position;
    row.insertCell().textContent = player.team;
    player.stats.forEach(stat => {
      row.insertCell().textContent = stat;
    });
  });

  container.appendChild(table);
};
