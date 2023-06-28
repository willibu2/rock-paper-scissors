import classes from './MainSection.module.css';
import Button from '../Buttons/Button';
import { useGameContext } from '../../store/game-context';

const MainSection = () => {
  const gameCtx = useGameContext();

  if (!gameCtx.gameState.advancedMode) {
    return (
      <main className={classes.main}>
        <Button type="paper" />
        <Button type="scissors" />
        <Button type="rock" className={classes['third-btn']} />
      </main>
    );
  }

  return (
    <main className={classes['main-bonus']}>
      <Button type="paper" className={classes.paper} />
      <Button type="scissors" className={classes.scissors} />
      <Button type="rock" className={classes.rock} />
      <Button type="lizard" className={classes.lizard} />
      <Button type="spock" className={classes.spock} />
    </main>
  );
};

export default MainSection;
