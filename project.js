// populating airport_info

function get_data() {
    const get_airport_info = document.getElementById("choose_airport"); 
    // const toCurrencySelect = document.getElementById("To currency");

    fetch("https://api.aviationapi.com/v1/airports")
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            // Iterate through json
            Object.entries(res).forEach(([currency_code, name]) => {
                // Create options for From Currency
                const option = document.createElement('option');
                option.value = currency_code;
                // Key and value
                option.innerHTML = `${currency_code} - ${name}`;
                get_airport_info.appendChild(option);

                // Create options for To Currency" 
                const option2 = document.createElement('option');
                option2.value = currency_code;
                option2.innerHTML = `${currency_code} - ${name}`;
                toCurrencySelect.appendChild(option2);
            });
        })
}
