import React from "react";
import "../styles.css";
function list() {
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label " for="flexRadioDefault1">
          Class Completed
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Class interupted/aborted
        </label>
        <div class="form-check">
          <li className="list">
            <label>
              <input type="radio" class="subOption" />
              Students didn't show up for the class
            </label>
          </li>
          <li className="list">
            <label>
              <input type="radio" class="subOption" /> Students didn't show any
              interest
            </label>
          </li>
          <li className="list">
            <label>
              <input type="radio" class="subOption" /> Student got disconnected
            </label>
          </li>
          <li className="list">
            <label>
              <input type="radio" class="subOption" /> I got disconnected
            </label>
          </li>
          <li className="list">
            <label>
              <input type="radio" class="subOption" /> Other Reason
            </label>
          </li>
        </div>
      </div>
    </div>
  );
}
export default list;
