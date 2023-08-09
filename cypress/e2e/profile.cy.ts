describe("Profile", () => {
  // User data is fetched from the database
  // The user data will be displayed in the user form with a save button
  // A validation error will show if the user tries to submit changes with empty required values
  // When a user saves changes, the data will send a request to the api to update their data in the database
  // The user has two options in the Visibility dropdown, Private or Public
  // The user has 5 options in the Status dropdown: Offline, Not Playing, Playing, Looking to Play, Looking for Partner
  // The user must set Court Location if they select the Playing options (Playing, Looking to Play, Looking for Partner) from the Status dropdown
  // The user may optionally set a time and description along with their Court Location if they select the Playing options (Playing, Looking to Play, Looking for Partner) from the Status dropdown
  // Display an option for a user deletes their profile
  // When a user deleted their profile/account, a confirmation modal will display, and if confirmed, they are removed from the database and logged out
  // A list of user connections is shown with their profile picture, name, and option to remove their connection
  // A user connection is remove when they submit the action to remove
  // A button to view all connections and navigates to the Connections Page
});
