import React from "react";
import Header from "./components/header/header.component";
import HomePage from "./components/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [isUserAuthenticated, setUserAuthentication] = React.useState(false);

  const handleUserAuthentication = () => {
    if (isUserAuthenticated) {
      fetch("http://localhost:8080/")
        .then(response => response.text())
        .then(response => {
          if (response === "Logged out successfully") {
            console.log("Logged out successfully");
            setUserAuthentication(false);
          }
        });
    } else {
      fetch("http://localhost:8080/")
        .then(response => response.text())
        .then(response => checkUserAuthentication(response));
    }
  };

  const checkUserAuthentication = authResponse => {
    if (authResponse === "User is authenticated successfully") {
      console.log("User is authenticated successfully");
      setUserAuthentication(true);
    } else {
      setUserAuthentication(false);
      alert("User is not authenticated");
    }
  };

  return (
    <div className="App">
      <Header
        isUserAuthenticated={isUserAuthenticated}
        authCallback={handleUserAuthentication}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
