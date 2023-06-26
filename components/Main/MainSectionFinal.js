import classes from './MainSectionFinal.module.css';
import Button from '../Buttons/Button';
import { useGameContext } from '../../store/game-context';

const MainSectionFinal = () => {
  const gameCtx = useGameContext();

  const result = gameCtx.gameState.result;

  let resultElement;

  if (result === 'draw') {
    resultElement = 'draw';
  }
  if (result === 'lost') {
    resultElement = 'you lose';
  }
  if (result === 'won') {
    resultElement = 'you win';
  }

  return (
    <main className={classes.main}>
      <h2 className={`${classes['small-heading']} ${classes.you}`}>
        you picked
      </h2>
      <h2 className={`${classes['small-heading']} ${classes.house}`}>
        the house picked
      </h2>

      <Button
        big={true}
        type={gameCtx.gameState.yourPick}
        className={classes['left-btn']}
      />
      <div className={classes['result-container']}>
        <p className={classes['result-text']}>{resultElement}</p>
        <button
          className={classes['play-again-btn']}
          onClick={gameCtx.playAgainHandler}
        >
          play again
        </button>
      </div>
      <Button
        big={true}
        type={gameCtx.gameState.housePick}
        className={classes['right-btn']}
      />
    </main>
  );
};

export default MainSectionFinal;
