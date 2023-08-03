  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create an object to store the user details
    const userDetails = {
      name: name,
      email: email,
      // Add more properties if you have additional input fields
    } ;

    // Convert the object to a JSON string
    const userDetailsJSON = JSON.stringify(userDetails);

    // Store the JSON string in local storage with a unique key (e.g., "userDetails")
    localStorage.setItem('userDetails', userDetailsJSON);

    // Optionally, you can provide some feedback to the user that the details have been stored
    alert('Details have been stored in the local storage.');

    // Optionally, you can reset the form after submission
    event.target.reset();
  }
  
  //Add an event listener to the form for form submission
  const userForm = document.getElementById('userForm');
  userForm.addEventListener('submit', handleSubmit);