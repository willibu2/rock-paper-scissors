import React, { useReducer, useContext } from 'react';

const gameContext = React.createContext({
  gameState: {},
  chooseHandler: () => {},
  playAgainHandler: () => {},
  gameModeHandler: () => {},
});

const initialState = {
  show: 'choose',
  yourPick: false,
  housePick: false,
  result: false,
  score: 0,
  advancedMode: false,
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

const randomFunctionBonus = () => {
  const randomNumber = Math.floor(Math.random() * 5);

  if (randomNumber === 0) {
    return 'rock';
  }
  if (randomNumber === 1) {
    return 'paper';
  }
  if (randomNumber === 2) {
    return 'scissors';
  }
  if (randomNumber === 3) {
    return 'spock';
  }
  if (randomNumber === 4) {
    return 'lizard';
  }
};

const gameReducer = (state, action) => {
  if (action.type === 'CHOOSE') {
    const yourPick = action.value;
    let result;

    if (!state.advancedMode) {
      const housePick = randomFunction();

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

    // BONUS

    const housePick = randomFunctionBonus();

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
      if (yourPick === 'lizard') {
        result = 'lost';
      }
      if (yourPick === 'spock') {
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
      if (yourPick === 'lizard') {
        result = 'won';
      }
      if (yourPick === 'spock') {
        result = 'lost';
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
      if (yourPick === 'lizard') {
        result = 'lost';
      }
      if (yourPick === 'spock') {
        result = 'won';
      }
    }
    if (housePick === 'lizard') {
      if (yourPick === 'lizard') {
        result = 'draw';
      }
      if (yourPick === 'paper') {
        result = 'lost';
      }
      if (yourPick === 'rock') {
        result = 'won';
      }
      if (yourPick === 'scissors') {
        result = 'won';
      }
      if (yourPick === 'spock') {
        result = 'lost';
      }
    }
    if (housePick === 'spock') {
      if (yourPick === 'spock') {
        result = 'draw';
      }
      if (yourPick === 'paper') {
        result = 'won';
      }
      if (yourPick === 'rock') {
        result = 'lost';
      }
      if (yourPick === 'scissors') {
        result = 'lost';
      }
      if (yourPick === 'lizard') {
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

  if (action.type === 'SWITCH-MODE') {
    const newGameMode = !state.advancedMode;

    return { ...state, advancedMode: newGameMode };
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

  const gameModeHandler = () => {
    dispatchGameAction({ type: 'SWITCH-MODE' });
  };

  const data = { gameState, chooseHandler, playAgainHandler, gameModeHandler };

  console.log(gameState);

  return <gameContext.Provider value={data}>{children}</gameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(gameContext);
};
