import React from "react";
import data from "./data/data.js";
import ArrayLocator from "./ArrayLocator.js";
function UserDisplay(props) {
  const { userInd } = props;
  let userData = data[userInd];
  return (
    <div className="UserDisplay">
      <article>
        <h1>
          {userData.name.first} {userData.name.last}
        </h1>
        <ul>
          <li>
            <h2>From:</h2>{" "}
            <p>
              {userData.city}, {userData.country}
            </p>
          </li>
          <li>
            <h2>Job Title:</h2> <p>{userData.title}</p>
          </li>
          <li>
            <h2>Employer:</h2> <p>{userData.employer}</p>
          </li>
        </ul>
        <div>
          <h2>Favorite Movies:</h2>
          <ol>
            <li>{userData.favoriteMovies[0]}</li>
            <li>{userData.favoriteMovies[1]}</li>
            <li>{userData.favoriteMovies[2]}</li>
          </ol>
        </div>
      </article>
      <ArrayLocator userData={userData} />
    </div>
  );
}

export default UserDisplay;
