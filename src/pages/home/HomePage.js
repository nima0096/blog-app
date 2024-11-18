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

      <h2>All Blog Post</h2>
      <div id="blog-post-container">
        {/* <p style={{color:'blue';
}}>All</p> */}
        <p>Design</p>
        <p>Travel</p>
        <p>Fashion</p>
        <p>Technology</p>
        <p>Branding</p>
      </div>
      <div className="pic-container">
        <div>
          <img src="images/pic1.png" alt="womanpic" />
          <p>Technology</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
        <div>
          <img src="images/pic2.png" alt="womanpic" />
          <p>Design</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
        <div>
          <img src="images/pic3.png" alt="womanpic" />
          <p>Technology</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
      </div>

      <div className="pic-container">
        <div>
          <img src="images/pic4.png" alt="womanpic" />
          <p>Technology</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
        <div>
          <img src="images/pic5.png" alt="womanpic" />
          <p>Software</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
        <div>
          <img src="images/pic6.png" alt="womanpic" />
          <p>Technology</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
      </div>
      <div className="pic-container">
        <div>
          <img src="images/pic7.png" alt="womanpic" />
          <p>Technology</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
        <div>
          <img src="images/pic8.png" alt="womanpic" />
          <p>Technology</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
        <div>
          <img src="images/pic9.png" alt="womanpic" />
          <p>Technology</p>
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <a>August 20, 2022</a>
        </div>
      </div>
      <div id="load-container">
        <button>Load more</button>
      </div>

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
