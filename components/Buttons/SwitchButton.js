import classes from './SwitchButton.module.css';

const SwitchButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes['rules-btn']}>
      {children}
    </button>
  );
};

export default SwitchButton;
