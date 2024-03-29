import React, { useState } from "react";
import { Button } from "antd";
import "../../styles/home/Home.css";
import LoginForm from "../../forms/LoginForm";

const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  return (
    <div className="home-body">
      <div className="home-body-button">
        {showLoginForm ? (
          <LoginForm />
        ) : (
          <Button className="button" onClick={handleLoginClick}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
