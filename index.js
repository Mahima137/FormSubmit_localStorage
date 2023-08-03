    // Function to update the form fields with stored user data
    function updateFormWithUserData(userData) {
      if (userData) {
        const { name, email, phoneNumber } = JSON.parse(userData);
        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
        document.getElementById("phoneNumber").value = phoneNumber;
      }
    }

    // Function to update the user data display
    function updateUserDataDisplay(userData) {
      if (userData) {
        const { name, email, phoneNumber } = JSON.parse(userData);
        const userDataDisplay = document.getElementById("userDataDisplay");
        userDataDisplay.innerHTML = `
          <h2>User Data:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        `;
      }
    }

    // Load stored user data when the page loads
    document.addEventListener("DOMContentLoaded", function () {
      const userData = localStorage.getItem("userData");
      updateFormWithUserData(userData);
      updateUserDataDisplay(userData);
    });

    // Add an event listener to the form for form submission
    document.getElementById("userForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission to avoid page reload

      // Get the user details from the form
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phoneNumber").value;

      // Create an object to hold the user details
      const user = {
        name: name,
        email: email,
        phoneNumber: phoneNumber
      };

      // Convert the user object to a JSON string
      const userString = JSON.stringify(user);

      // Save the user details in local storage with a key "userData"
      localStorage.setItem("userData", userString);

      // Update the form with the stored user data
      updateFormWithUserData(userString);

      // Update the user data display
      updateUserDataDisplay(userString);
    });

