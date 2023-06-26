import classes from './MainSection.module.css';
import Button from '../Buttons/Button';
import { useGameContext } from '../../store/game-context';

const MainSection = (props) => {
  const gameCtx = useGameContext();

  return (
    <main className={classes.main}>
      <Button
        type="paper"
        onClick={gameCtx.chooseHandler.bind(null, 'paper')}
        className={classes.btn}
      />
      <Button
        type="scissors"
        onClick={gameCtx.chooseHandler.bind(null, 'scissors')}
        className={classes.btn}
      />
      <Button
        type="rock"
        className={`${classes['third-btn']} ${classes.btn}`}
        onClick={gameCtx.chooseHandler.bind(null, 'rock')}
      />
    </main>
  );
};

export default MainSection;
