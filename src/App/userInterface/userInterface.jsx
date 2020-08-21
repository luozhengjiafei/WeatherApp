import React from "react";
import "./styles.scss";

function UserInterface() {

    return(
        <div>
            <h1 className="titleText">Please enter the city to find the weather</h1>
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="CityName" name="Cityname" id='Cityname' required />
            <label for="Cityname" class="form__label">Input City</label>
        </div>
        </div>
    );
}
export default UserInterface;
