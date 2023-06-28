import classes from './Button.module.css';
import Image from 'next/image';
import { useGameContext } from '../../store/game-context';

const Button = ({ type, className, big }) => {
  const gameCtx = useGameContext();
  const src = `/images/icon-${type}.svg`;

  let divClasses = `${classes['btn-container']} ${
    classes[`${type}`]
  } ${className}`;

  let btnClasses = `${classes.btn} ${classes['btn-small']}`;

  if (big) {
    btnClasses = `${classes.btn} ${classes['btn-big']}`;

    divClasses = `${classes['btn-container']} ${
      classes[`${type}`]
    } ${className} ${classes['btn-container-big']}`;
  }

  const onClick = big ? null : gameCtx.chooseHandler.bind(null, type);

  return (
    <div className={divClasses}>
      <button className={btnClasses} onClick={onClick}>
        <Image
          alt="rok paper scissors illustration"
          className={classes.img}
          src={src}
          width={100}
          height={100}
        />
      </button>
    </div>
  );
};

export default Button;
