import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../App.css";

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState(" Let's see who wins ");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };
  const generateComputerChoice = () => {
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerRandomChoice);
  };
  const resetGame = () => {
    window.location.reload();
  };
  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock" ||
        comboMoves === "scissorspaper"
      ) {
        const updatedPoints = userPoints + 1;
        setUserPoints(updatedPoints);
        setTurnResult("User got the point");
        if (updatedPoints === 5) {
          setGameOver(true);
          setResult("User wins");
        }
      }
      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        const updatedPoints = computerPoints + 1;
        setComputerPoints(updatedPoints);
        setTurnResult("Computer got the point");
        if (updatedPoints === 5) {
          setGameOver(true);
          setResult("Computer wins");
        }
      }
      if (
        comboMoves === "rockrock" ||
        comboMoves === "paperpaper" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one got a point");
      }
    }
  }, [userChoice, computerChoice]);
  return (
    <div className="container">
      <h1 className="text-center">Rock Paper Scissers</h1>
      <div className="row mt-4">
        <div className="col-sm user-points">
          <h2>User Points : {userPoints}</h2>
        </div>
        <div className="col-sm computer-points">
          <h2>Computer Points : {computerPoints}</h2>
        </div>
      </div>
      <div className="row choices">
        <div className="col-sm user-choices">
          <img
            src={require(`../../public/images/${userChoice}.png`)}
            alt="user-choices"
            id="image"
          />
        </div>
        <div className="col-sm computer-choices">
          <img
            src={require(`../../public/images/${computerChoice}.png`)}
            alt="computer-choices"
            id="images"
          />
        </div>
      </div>
      <div className="text-center mt-4 button-div">
        {choices.map((choice, index) => {
          return (
            <Button
              variant="contained"
              className="mx-2"
              key={index}
              onClick={() => {
                handleOnClick(choice);
              }}
            >
              {choice}
            </Button>
          );
        })}
      </div>
      <div className="row mt-5">
        <div className="col-sm result">
          <h3>Turn Result : {turnResult}</h3>
          <h3>Final Result : {result}</h3>
        </div>
        <div className="col-sm">
          {gameOver && (
            <Button
              variant="contained"
              onClick={() => {
                resetGame();
              }}
            >
              Restart game?
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
