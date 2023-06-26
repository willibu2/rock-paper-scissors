import classes from './Button.module.css';
import Image from 'next/image';

const Button = ({ type, className, big, onClick }) => {
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
