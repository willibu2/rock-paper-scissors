import classes from './Overlay.module.css';
import Image from 'next/image';
import { useRulesContext } from '../store/rules-context';
import { useGameContext } from '../store/game-context';

const Overlay = (props) => {
  const rulesCtx = useRulesContext();
  const gameCtx = useGameContext();

  const imageSrc = gameCtx.gameState.advancedMode
    ? '/images/image-rules-bonus.svg'
    : '/images/image-rules.svg';

  return (
    <>
      <div className={classes.overlay}>
        <h2 className={classes.h2}>rules</h2>
        <Image
          onClick={rulesCtx.closeModalHandler}
          alt="close icon"
          className={classes['close-icon']}
          src="/images/icon-close.svg"
          width={25}
          height={25}
        />
        <Image
          alt="rules image"
          className={classes['img-rules']}
          src={imageSrc}
          width={2}
          height={2}
        />
      </div>
      <div
        className={classes.backdrop}
        onClick={rulesCtx.closeModalHandler}
      ></div>
    </>
  );
};

export default Overlay;
