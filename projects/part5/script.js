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
  const headers = ["Player", "Team", "Position", "PPG", "RPG", "APG", "SPG", "BPG", "Field Goal %"];
  headers.forEach(headerText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  // Populate table rows with player information
  players.forEach(player => {
    const row = table.insertRow();
    
    // Insert player image in the first column
    const imgCell = row.insertCell();
    const img = document.createElement("img");
    img.src = player.img_name;
    img.alt = player.name;
    img.classList.add("player-image");
    imgCell.appendChild(img);
    
    // Insert team logo in the second column
    const teamCell = row.insertCell();
    const teamImg = document.createElement("img");
    teamImg.src = `images/${player.team.toLowerCase()}_logo.png`; // Assuming logos are named as "teamname_logo.png"
    teamImg.alt = player.team;
    teamImg.classList.add("team-logo");
    teamCell.appendChild(teamImg);

    // Insert player name in the third column
    const nameCell = row.insertCell();
    nameCell.textContent = player.name;
    
    // Insert position, stats, etc.
    row.insertCell().textContent = player.position;
    player.stats.forEach(stat => {
      row.insertCell().textContent = stat;
    });
  });

  container.appendChild(table);
};
