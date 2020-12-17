import React, { useState } from "react";
import styles from "./CardFront.module.scss";
import bearsLogo from "../../assets/images/1200px-Bristol_Bears_logo.svg.png";

import Button from "../../components/Button";

import { IPlayer } from "../../data/data";
// impor {ButtonProps} from "../../"

interface CardFrontProps {
  player: IPlayer;
  // addPlayerToTeam: () => Array<object>;
  // currentTeam: Array<object>
  // addPlayerToTeam:
  // currentTeam
  // btnText: string;
  // btnImg: string;
  // handleClick: () => any;
}

const CardFront: React.FC<CardFrontProps> = ({ player }) => {
  const [position, setPosition] = useState(player.positionNum[0]);

  console.log(position);

  const stopEventPropagation = (e: any) => {
    e.stopPropagation();
  };

  const handleChange = (event: any) => {
    setPosition(event.target.value);
  };

  const playerPositionJsx = player.positionNum.map((number) => {
    return <option value={number}>{number}</option>;
  });

  // const flagJsx = () => {
  //   if (player.nationality == "England") {
  //     setFlag('England')
  //   } else if (player.nationality == "New Zealand"){
  //     setFlag('England')

  //   }
  // };

  return (
    <div className={styles.cardFront}>
      <section className={styles.baseCard}>
        <div className={styles.bottomCard}>
          <img src={bearsLogo} alt="Bristol Bears" />
        </div>
        <div className={styles.lowerCard}>
          <img src={player.playerImg} alt="Player" />
        </div>
        <div className={styles.middleCard}></div>
        <div className={styles.topCard}>
          <div className={styles.topCardOrganise}>
            <div className={styles.season}>
              <p className={styles.seasonYear}>2020/21</p>
              <div>
                <p>88</p>
                <img src={player.flag} alt="Players National Flag" />
              </div>
            </div>
            <div className={styles.playerDetails}>
              <div className={styles.playerDetailsName}>
                <h2>{player.playerName}</h2>
              </div>
              <div className={styles.playerDetailsInfo}>
                <div>
                  <p>Age</p>
                  <p>{player.playerAge}</p>
                </div>
                <div
                  className={styles.selectDrop}
                  onClick={(e) => stopEventPropagation(e)}
                >
                  <label>Position:</label>
                  <select name="position" id="position" onChange={handleChange}>
                    {playerPositionJsx}
                  </select>
                </div>
                <div>
                  <p>Height</p>
                  <p>{player.playerHeight}cm</p>
                </div>
              </div>
              <div
                className={styles.playerButtons}
                onClick={(e) => stopEventPropagation(e)}
              >
                {/* <Button btnText="Pick"/> */}
                <button onClick={() => alert(`Picked ${position}`)}>
                  {/* <button onClick={() => addPlayerToTeam(currentTeam[position - 1])} > */}
                  Pick
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardFront;