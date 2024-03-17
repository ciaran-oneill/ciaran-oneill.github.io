const toggleHamburger = () => {
  document.getElementById("nav-items").classList.toggle("hide");
};

window.onload = () => {
  document.getElementById("hamburger").onclick = toggleHamburger;
  document.getElementById("team-select").addEventListener('change', function() {
      const teamName = this.value;
      if (teamName) {
          fetchPlayerStats(`${teamName}.json`);
          console.log($(teamName));
      }
  });
};

const fetchPlayerStats = async (fileName) => {
  try {
    const response = await fetch(fileName);
    return await response.json();
  } catch (error) {
    console.error("Fetching player stats failed:", error);
    return null; 
  }
};



const displayPlayerStats = (players, fileName) => {
  const container = document.getElementById("player-stats");
  container.innerHTML = ''; // Clear previous content
  const table = document.createElement("table");
  const teamName = players.length > 0 ? players[0].team : "Selected Team"; // Use the team name from the first player

  table.innerHTML = `
      <tr class="team-name">
          <th colspan="8">${teamName}</th> <!-- Corrected colspan to 8 -->
      </tr>
      <tr>
          <th>Position</th>
          <th>Player</th>
          <th>Points Per Game</th>
          <th>Rebounds Per Game</th>
          <th>Assists Per Game</th>
          <th>Steals Per Game</th>
          <th>Blocks Per Game</th>
          <th>Field Goal %</th>
      </tr>
  `;


  players.forEach(player => {
      const row = table.insertRow(-1);
      row.innerHTML = `
          <td>${player.position}</td>
          <td>${player.name}</td>
          <td>${player.stats[0]}</td>
          <td>${player.stats[1]}</td>
          <td>${player.stats[2]}</td>
          <td>${player.stats[3]}</td>
          <td>${player.stats[4]}</td>
          <td>${player.stats[5]}</td>
      `;
  });

  container.appendChild(table);
};
