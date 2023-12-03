// Import necessary modules and functions
"use client";

import React from "react";
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

// Create the LandingPage component
const LandingPage = () => {
  // Destructure user, gitHubSignIn, and firebaseSignOut from the useUserAuth hook
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [isSignedIn, setIsSignedIn] = useState(!!user);
  // Function to handle GitHub sign-in
  async function handleGitHubSignIn() {
    try {
      await gitHubSignIn();
      setIsSignedIn(true);
    }
    catch (error) {
      console.log(error);
    }
  }
  // Function to handle user logout
  async function handleLogout() {
    try {
      await firebaseSignOut();
      setIsSignedIn(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  // Render different content based on user authentication status
  return (
    <div>
      {user ? (
        // If user is logged in
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          {isSignedIn && (
            <Link href="/week8/shopping-list">
              <button>Shopping List</button>
            </Link>
          )}
          <button onClick={handleLogout}>Logout</button>
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
