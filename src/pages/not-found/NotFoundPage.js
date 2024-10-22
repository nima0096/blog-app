import React from "react";
import { Footer, Header } from "../../components";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div id="not-found-container">
      <Header />

      <div id="not-found">
        <div id="code-container">
          <h1>404</h1>
        </div>
        <div id="not-found-info">
          <h2>Page Not Found</h2>
          <p>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>

          <Link to="/">
            <button>Back To Home</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
