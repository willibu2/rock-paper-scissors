import classes from './RulesButton.module.css';
import { useRulesContext } from '../../store/rules-context';

const RulesButton = () => {
  const rulesCtx = useRulesContext();

  return (
    <button
      onClick={rulesCtx.showModalHandler}
      className={classes['rules-btn']}
    >
      rules
    </button>
  );
};

export default RulesButton;
