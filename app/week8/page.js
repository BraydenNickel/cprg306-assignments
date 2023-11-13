// Import necessary modules and functions
import React from "react";
import { useUserAuth } from "./_utils/auth-context";

// Create the LandingPage component
const LandingPage = () => {
  // Destructure user, gitHubSignIn, and firebaseSignOut from the useUserAuth hook
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle GitHub sign-in
  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  // Function to handle user logout
  const handleLogout = async () => {
    await firebaseSignOut();
  };

  // Render different content based on user authentication status
  return (
    <div>
      {user ? (
        // If user is logged in
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <a href="/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        // If user is not logged in
        <div>
          <p>Please sign in to access the application</p>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

// Export the LandingPage component
export default LandingPage;
