import React from "react";
import "./styles.scss";

function UserInterface() {

    return(
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="CityName" name="Cityname" id='Cityname' required />
            <label for="Cityname" class="form__label">Input City</label>
        </div>
    );
}
export default UserInterface;
