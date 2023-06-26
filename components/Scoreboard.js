import classes from './Scoreboard.module.css';
import { useGameContext } from '../store/game-context';

const Scoreboard = () => {
  const gameCtx = useGameContext();

  return (
    <div className={classes.scoreboard}>
      <h1 className={classes.heading}>rock paper scissors</h1>
      <div className={classes['score-container']}>
        <p className={classes['score-text']}>score</p>
        <p className={classes['score-number']}>{gameCtx.gameState.score}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
