import React from "react";
import {NavigationArrowProps, PlayerProps, ProgressProps, QuizzProps, StartProps} from "./Game.model";

//TODO: Implement
function Player(props: PlayerProps) {
  return null;
}

//TODO: Implement
function ProgressBar(props: ProgressProps) {
    return <div className="progress-container">

    </div>
}

//TODO: Implement
function Counter(props: ProgressProps) {
    return <div className="counter-container">
        <span className="counter-current-number">{props.current}</span>
        <span className="counter-delimiter">/</span>
        <span className="counter-total-number">{props.total}</span>
    </div>
}


//TODO: Implement
function NavigationArrow(props: NavigationArrowProps) {
    return <span className={props.className}>arrow</span>
}


//TODO: Implement
function Quizz(props: QuizzProps) {
    return <div className="quizz-container"></div>
}

//TODO: Implement
function Game(props: StartProps) {
    return <div className="game-container">
        <ProgressBar {...props.progress}/>
        <Counter {...props.progress}/>

        <NavigationArrow className="game-prev-step"/>
        <Quizz {...props.quizz}/>
        <NavigationArrow className="game-next-step"/>

        <Player {...props.player}/>
    </div>
}


export default Game
