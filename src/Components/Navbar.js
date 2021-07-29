import React, { useState, useCallback, useRef, useEffect } from "react";
import Modal from "react-modal";
import List from "./list";
import Route from "./route";
import Hamburger from "./Hamberger/HamburgerMenu";

import "../styles.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "1" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:0:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    deadline.setSeconds(deadline.getMinutes() + 60);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return (
    <div class="">
      <div class="container">
        <ul className="header">
          <li>
            <ul className="sub">
              <li>
                {" "}
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQFlR7ET1VWQtw/company-logo_200_200/0/1614841176944?e=2159024400&v=beta&t=Uj9_9B-R771_5HgdWtwXpoE9mA49jgCwuTHXhh35CFU"
                  alt=""
                  width="30"
                  height="30"
                />
              </li>
              <li>Trial Lesson [Grade 1-3]</li>
              <li>
                <Route />
              </li>
            </ul>
          </li>

          <li>{timer}</li>
          <li>
            <button type="button" onClick={openModal} className="btn">
              End Class
            </button>
          </li>
          <li>
            <Hamburger />
          </li>
        </ul>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h3>Select a reason to end class</h3>
        <List />
        <input
          className="btn btn-danger"
          type="button"
          value="End Class"
          onKeyPress="setEnd(true)"
          onClick={closeModal}
        />
        <input
          className="btn2 btn-light"
          type="button"
          value="Cancel"
          onClick={closeModal}
        />
      </Modal>
    </div>
  );
}
export default Navbar;
