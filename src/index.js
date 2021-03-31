import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <UserCard {...user} />
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const UserCard = ({
  name,
  location,
  foodType,
  age,
  likes,
  twitterUsername,
  avatar
}) => {
  const twitterLink = `https://twitter.com/${twitterUsername}`;
  const labels = ["Location", "Eats", "Age", "Likes", "Twitter"];
  return (
    <div>
      <img src={avatar} alt={`${name} - ${location}`} />
      <h3>
        <a target="_blank" rel="noreferrer" href={twitterLink}>
          {name}
        </a>
      </h3>
      <UserDetail label={"Location"} value={location} />
      <UserDetail label={"Eats"} value={foodType} />
      <UserDetail label={"Age"} value={age} />
      <UserDetail label={"Likes"} value={likes} />
      <UserDetail
        label={"Twitter"}
        value={
          <a target="_blank" rel="noreferrer" href={twitterLink}>
            @{twitterUsername}
          </a>
        }
      />
    </div>
  );
};
const UserDetail = ({ label, value }) => {
  return (
    <p>
      <strong>{label}</strong>
      {value}
    </p>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
