
fetch('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json')
  .then(response => response.json())
  .then(data => {
    const countrySelect = document.getElementById('country');
    data.forEach(country => {
      const option = document.createElement('option');
      option.text = country.name;
      option.value = country.name;
      countrySelect.add(option);
    });

    countrySelect.addEventListener('change', () => {
      const selectedCountry = countrySelect.value;
      const stateSelect = document.getElementById('state');
      stateSelect.innerHTML = "";
      const country = data.find(country => country.name === selectedCountry);
      if (country) {
        country.states.forEach(state => {
          const option = document.createElement('option');
          option.text = state.name;
          option.value = state.name;
          stateSelect.add(option);
        });
      }
    });
});

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    
    if (name === "" || country === "" || state === "") {
      document.getElementById("message").innerHTML = "Error: Name, Country, State - are mandatory fields";
      return false;
    }
    
    if (name.length < 4 || name.length > 10) {
      document.getElementById("message").innerHTML = "Error: Name should be between 4 and 10 characters.";
      return false;
    }
  
    if (!validateEmail(email)) {
      document.getElementById("message").innerHTML = "Error: Invalid email address.";
      return false;
    }
  
    if (isNaN(contact) || contact.length != 10) {
      document.getElementById("message").innerHTML = "Error: Contact number should be a 10 digit number.";
      return false;
    }
  
    document.getElementById("message").innerHTML = "Success: All fields are valid.";
    return true;
  };
  