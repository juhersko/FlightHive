// // populating airport_info

// function get_data() {
//     const get_airport_info = document.getElementById("choose_airport"); 
//     // const toCurrencySelect = document.getElementById("To currency");

//     fetch("https://api.aviationapi.com/v1/airports")
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res);
//             // Iterate through json
//             Object.entries(res).forEach(([currency_code, name]) => {
//                 // Create options for From Currency
//                 const option = document.createElement('option');
//                 option.value = currency_code;
//                 // Key and value
//                 option.innerHTML = `${currency_code} - ${name}`;
//                 get_airport_info.appendChild(option);

//                 // Create options for To Currency" 
//                 const option2 = document.createElement('option');
//                 option2.value = currency_code;
//                 option2.innerHTML = `${currency_code} - ${name}`;
//                 toCurrencySelect.appendChild(option2);
//             });
//         })
// }




// const manufacturers = ['Boeing', 'Airbus', 'Lockheed Martin', 'Northrop Grumman', 'General Dynamics'];

// async function loadAircraftButtons() {
//     const buttonContainer = document.getElementById('aircraftButtons');

//     if (!buttonContainer) {
//         console.error('Button container not found');
//         return;
//     }

//     // Clear existing buttons
//     buttonContainer.innerHTML = '';

//     // Create a button for each manufacturer
//     for (const manufacturer of manufacturers) {
//         const button = document.createElement('button');
//         button.textContent = manufacturer;
//         button.className = 'aircraft-button';
//         button.addEventListener('click', () => showAircraftInfo(manufacturer));
//         buttonContainer.appendChild(button);
//     }
// }

// async function showAircraftInfo(manufacturer) {
//     const infoContainer = document.getElementById('aircraftInfo');
//     if (!infoContainer) {
//         console.error('Info container not found');
//         return;
//     }

//     infoContainer.innerHTML = '<p>Loading...</p>';

//     try {
//         const res = await fetch(`https://api.api-ninjas.com/v1/aircraft?manufacturer=${encodeURIComponent(manufacturer)}`, {
//             method: 'GET',
//             headers: {
//                 'X-Api-Key': 'eD0EFwCRrtbSYy50FQhIxVabuZ7PB9kuoF87nd2Z'
//             }
//         });

//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }

//         const data = await res.json();

//         if (data.length === 0) {
//             infoContainer.innerHTML = `<p>No aircraft found for ${manufacturer}.</p>`;
//             return;
//         }

//     } catch (error) {
//         console.error('Error fetching aircraft data:', error);
//         infoContainer.innerHTML = '<p>Error loading aircraft data. Please try again later.</p>';
//     }

//     infoContainer.style.display = 'block';
// }

// // Load buttons when the page loads
// document.addEventListener('DOMContentLoaded', loadAircraftButtons);

// Function to load 10 random manufacturers as buttons


// const planeMap = {};

// const manufacturers = [
//     "Boeing",
//     "Airbus",
//     "Lockheed Martin",
//     "Bombardier",
//     "Embraer",
//     "Cessna",
//     "Gulfstream",
//     "Dassault",
//     "Mitsubishi",
//     "Gulfstream Aerospace"
// ];

// async function loadManufacturerButtons() {
//     const buttonContainer = document.getElementById('manufacturerButtons');

//     for (const manufacturer of manufacturers) {
//         const res = await fetch(`https://api.api-ninjas.com/v1/aircraft?manufacturer=${encodeURIComponent(manufacturer)}`, {
//             method: 'GET',
//             headers: {
//                 'X-Api-Key': 'eD0EFwCRrtbSYy50FQhIxVabuZ7PB9kuoF87nd2Z'
//             }
//         });

//         const data = await res.json();

//         // The API returns an array; loop through each aircraft
//         data.forEach(plane => {
//             const planeName = `${plane.manufacturer} ${plane.model}`;
//             planeMap[planeName] = plane;

//             const button = document.createElement('button');
//             button.textContent = planeName;
//             button.className = 'manufacturer-button';

//             button.addEventListener('click', () => {
//                 showAircraftInfo(plane);
//             });

//             buttonContainer.appendChild(button);
//         });
//     }
// }

// function showAircraftInfo(plane) {
//     const info = document.getElementById('aircraftInfo');
//     info.innerHTML = `
//         <p><strong>Model:</strong> ${plane.model || 'N/A'}</p>
//         <p><strong>Type:</strong> ${plane.enginetype || 'N/A'}</p>
//         <p><strong>Max Speed:</strong> ${plane.max_speed_knots || 'N/A'} knots</p>
//     `;
// }



// loadManufacturerButtons();




const planeMap = {};

const manufacturers = [
  "Boeing", "Airbus", "Lockheed Martin", "Bombardier", "Embraer",
  "Cessna", "Gulfstream", "Dassault", "Mitsubishi", "Gulfstream Aerospace"
];

async function loadManufacturerButtons() {
  const buttonContainer = document.getElementById('manufacturerButtons');

  for (const manufacturer of manufacturers) {
    const res = await fetch(`https://api.api-ninjas.com/v1/aircraft?manufacturer=${encodeURIComponent(manufacturer)}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'eD0EFwCRrtbSYy50FQhIxVabuZ7PB9kuoF87nd2Z'
      }
    });

    const data = await res.json();

    data.forEach(plane => {
      const planeName = `${plane.manufacturer} ${plane.model}`;
      planeMap[planeName] = plane;

      const button = document.createElement('button');
      button.textContent = planeName;
      button.className = 'manufacturer-button';

      button.addEventListener('click', () => {
        showAircraftInfo(plane);
      });

      buttonContainer.appendChild(button);
    });
  }
}

function showAircraftInfo(plane) {
  const infoContainer = document.getElementById('aircraftInfo');
  const infoBox = document.createElement('div');
  infoBox.className = 'info-box';

  infoBox.innerHTML = `
    <h3>${plane.manufacturer} ${plane.model}</h3>
    <p><strong>Engine Type:</strong> ${plane.enginetype || 'N/A'}</p>
    <p><strong>Max Speed:</strong> ${plane.max_speed_knots || 'N/A'} knots</p>
  `;

  infoContainer.appendChild(infoBox);




  
}


loadManufacturerButtons();





