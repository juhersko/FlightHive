// Fetch NBA teams from Ball Don't Lie API
async function fetchNBATeams() {
  const loading = document.getElementById('teams-loading');
  const errorDiv = document.getElementById('teams-error');
  const content = document.getElementById('teams-content');
  const apiKey = 'd229cab2-5da9-4342-8673-8e5307f88801';

  try {
    const response = await fetch('https://api.balldontlie.io/v1/teams', {
      headers: {
        'Authorization': `${apiKey}`
      }
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      throw new Error('No NBA teams found.');
    }

    content.innerHTML = data.data.map(team => `
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="font-bold text-lg">${team.full_name}</h3>
        <p>City: ${team.city}</p>
        <p>Conference: ${team.conference}</p>
        <p>Division: ${team.division}</p>
        <p>Abbreviation: ${team.abbreviation}</p>
      </div>
    `).join('');
  } catch (error) {
    errorDiv.textContent = `Error: ${error.message}`;
    errorDiv.classList.remove('hidden');
  } finally {
    loading.classList.add('hidden');
  }
}

// Initialize data fetching
fetchNBATeams();




async function fetchNBATeams() {
    const loading = document.getElementById('teams-loading');
    const errorDiv = document.getElementById('teams-error');
    const content = document.getElementById('teams-content');
    const infoDisplay = document.getElementById('team-info-display');
    const apiKey = 'd229cab2-5da9-4342-8673-8e5307f88801';
  
    try {
      const response = await fetch('https://api.balldontlie.io/v1/teams', {
        headers: {
          'Authorization': `${apiKey}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (!data.data || data.data.length === 0) {
        throw new Error('No NBA teams found.');
      }
  
      // Clear content area and create buttons
      content.innerHTML = data.data.map(team => `
        <button 
          class="team-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded"
          data-team='${JSON.stringify(team)}'
        >
          ${team.full_name}
        </button>
      `).join('');
  
      // Add click handlers to buttons
      document.querySelectorAll('.team-button').forEach(button => {
        button.addEventListener('click', () => {
          const team = JSON.parse(button.getAttribute('data-team'));
          infoDisplay.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-md mt-4">
              <h3 class="font-bold text-lg">${team.full_name}</h3>
              <p>City: ${team.city}</p>
              <p>Conference: ${team.conference}</p>
              <p>Division: ${team.division}</p>
              <p>Abbreviation: ${team.abbreviation}</p>
            </div>
          `;
        });
      });
    errorDiv.classList.add('hidden');
     errorDiv.textContent = '';
 
   } catch (error) {
     errorDiv.textContent = `Error: ${error.message}`;
     errorDiv.classList.remove('hidden');
   }
 }


 
