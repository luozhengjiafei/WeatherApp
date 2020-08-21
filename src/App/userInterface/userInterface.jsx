import React from "react";
import "./styles.css";

function UserInterface() {

    return(
        <div>
        <h1>Please enter the city name:</h1>
        <label for="cityName">City:</label>
        <input type="text" id="cityName" name="cityName"/><br/><br/>
        <input type="submit" value="Submit"/>
        </div>
    );
}
export default UserInterface;
