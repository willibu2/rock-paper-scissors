import classes from './SwitchContainer.module.css';
import SwitchButton from './Buttons/SwitchButton';
import { useRulesContext } from '../store/rules-context';
import { useGameContext } from '../store/game-context';

const SwitchContainer = () => {
  const rulesCtx = useRulesContext();
  const gameCtx = useGameContext();

  const gameMode = gameCtx.gameState.advancedMode
    ? 'normal mode'
    : 'advanced mode';

  return (
    <div className={classes['switch-container']}>
      <SwitchButton onClick={gameCtx.gameModeHandler}>{gameMode}</SwitchButton>
      <SwitchButton onClick={rulesCtx.showModalHandler}>rules</SwitchButton>
    </div>
  );
};

export default SwitchContainer;
