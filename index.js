document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  const userData = {
    name: name,
    email: email,
    phoneNumber: phoneNumber
  };

  // Generate a unique key for the user data based on their email or some other criteria
  const userKey = email; // You can use a different key generation mechanism if needed

  //localStorage.setItem(userKey, JSON.stringify(userData));
  axios.post("https://crudcrud.com/api/d3ec33daee9340d9a343b6b890908dfd/AppointmentData", obj)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  const userDataDisplay = document.getElementById("userDataDisplay");
  userDataDisplay.innerHTML = generateUserListHTML();
});

const userDataDisplay = document.getElementById("userDataDisplay");
userDataDisplay.innerHTML = generateUserListHTML();

function generateUserListHTML() {
  let html = "<h2></h2>";
  
  // Loop through local storage and retrieve each user's data
  for (let i = 0; i < localStorage.length; i++) {
    const userKey = localStorage.key(i);
    const userData = JSON.parse(localStorage.getItem(userKey));

    html += `
      <div class="user">
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Phone Number:</strong> ${userData.phoneNumber}</p>
        <button onclick="editUser('${userKey}')">Edit</button>
        <button onclick="removeUser('${userKey}')">Remove</button>
      </div>
    `;
  }
  
  return html;
}

function editUser(userKey) {
  const userData = JSON.parse(localStorage.getItem(userKey));

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const phoneNumberField = document.getElementById("phoneNumber");

  nameField.value = userData.name;
  emailField.value = userData.email;
  phoneNumberField.value = userData.phoneNumber;
}

function removeUser(userKey) {
  localStorage.removeItem(userKey);
  const userDataDisplay = document.getElementById("userDataDisplay");
  userDataDisplay.innerHTML = generateUserListHTML();
}
