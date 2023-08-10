
document.addEventListener("DOMContentLoaded", function() {
  // Replace 'API_ENDPOINT' with the actual API endpoint from crudcrud
  const apiEndpoint = 'https://crudcrud.com/api/d3ec33daee9340d9a343b6b890908dfd/appointmentData';

  // Make an HTTP GET request to retrieve user details
  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      // 'data' now contains the user details returned by the API
      // Display the user details on the website
      displayUserDetails(data);
    })
    .catch(error => {
      console.error('Error fetching user details:', error);
    });
});

function displayUserDetails(userList) {
  const userDataDisplay = document.getElementById("userDataDisplay");
  userDataDisplay.innerHTML = generateUserListHTML(userList);
}

function generateUserListHTML(userList) {
  let html = "<h2>User List:</h2>";
  userList.forEach(userData => {
    html += `
      <div class="user">
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Phone Number:</strong> ${userData.phoneNumber}</p>
      </div>
    `;
  });
  return html;
}
function deleteUser(userId) {
  // Replace 'API_ENDPOINT' with the actual API endpoint from crudcrud
  const apiEndpoint = `API_ENDPOINT/${userId}`;

  fetch(apiEndpoint, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        // Remove the user detail from the website
        removeUserFromUI(userId);
      } else {
        console.error('Error deleting user:', response.status);
      }
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
}

function removeUserFromUI(userId) {
  const userDiv = document.querySelector(`[data-user-id="${userId}"]`);
  if (userDiv) {
    userDiv.remove();
  }
}