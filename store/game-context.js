import React, { useReducer, useContext } from 'react';

const gameContext = React.createContext({
  gameState: {},
  chooseHandler: () => {},
  playAgainHandler: () => {},
});

const initialState = {
  show: 'choose',
  yourPick: false,
  housePick: false,
  result: false,
  score: 0,
};

const randomFunction = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  }
  if (randomNumber === 1) {
    return 'paper';
  }
  if (randomNumber === 2) {
    return 'scissors';
  }
};

const gameReducer = (state, action) => {
  if (action.type === 'CHOOSE') {
    const housePick = randomFunction();
    const yourPick = action.value;

    let result;

    if (housePick === 'rock') {
      if (yourPick === 'rock') {
        result = 'draw';
      }
      if (yourPick === 'scissors') {
        result = 'lost';
      }
      if (yourPick === 'paper') {
        result = 'won';
      }
    }
    if (housePick === 'paper') {
      if (yourPick === 'paper') {
        result = 'draw';
      }
      if (yourPick === 'rock') {
        result = 'lost';
      }
      if (yourPick === 'scissors') {
        result = 'won';
      }
    }
    if (housePick === 'scissors') {
      if (yourPick === 'scissors') {
        result = 'draw';
      }
      if (yourPick === 'paper') {
        result = 'lost';
      }
      if (yourPick === 'rock') {
        result = 'won';
      }
    }

    let newScore = state.score;
    if (result === 'won') {
      newScore++;
    }

    if (result === 'lost') {
      newScore--;
    }

    return {
      ...state,
      yourPick: yourPick,
      housePick: housePick,
      result: result,
      score: newScore,
    };
  }

  if (action.type === 'PLAY-AGAIN') {
    return { ...state, yourPick: false, housePick: false };
  }

  return initialState;
};

export const GameContextProvider = ({ children }) => {
  const [gameState, dispatchGameAction] = useReducer(gameReducer, initialState);

  const chooseHandler = (value) => {
    dispatchGameAction({ type: 'CHOOSE', value: value });
  };

  const playAgainHandler = () => {
    dispatchGameAction({ type: 'PLAY-AGAIN' });
  };

  const data = { gameState, chooseHandler, playAgainHandler };

  console.log(gameState);

  return <gameContext.Provider value={data}>{children}</gameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(gameContext);
};
