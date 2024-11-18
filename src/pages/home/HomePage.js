import React from "react";
import { Header, Footer, Button } from "../../components";
import { useUserContext } from "../../context";
import { signOutFunction } from "../../firebase";
import "./HomePage.css";

export const HomePage = () => {
  const { loading, currentUser } = useUserContext();

  const handleSignOut = async () => {
    await signOutFunction();
  };

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading ...
      </div>
    );
  }

  return (
    <div>
      <Header />
      <img id="home-page-image" src="images/image-1.png" alt="womanpic" />
      <h1>Trending</h1>
      <div id="trending-container">
        <img src="images/computerpic.png" alt="womanpic" />
        <img src="images/mountanpic.png" alt="womanpic" />
        <img src="images/womanpic.png" alt="womanpic" />
        <img src="images/Rectangle.png" alt="womanpic" />
      </div>
      <div>All Blog Post</div>

      <div id="home-container">
        {currentUser ? (
          <>
            <h3>Welcome back, {currentUser.displayName}!</h3>
            <Button onClick={handleSignOut} style={{ width: "100px" }}>
              Sign out
            </Button>
          </>
        ) : (
          <h3>Welcome, Guest!</h3>
        )}
      </div>

      <Footer />
    </div>
  );
};
