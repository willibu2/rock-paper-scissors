import Scoreboard from './Scoreboard';
import MainSection from './Main/MainSection';
import RulesButton from './Buttons/RulesButton';
import Overlay from './Overlay';
import MainSectionFinal from './Main/MainSectionFinal';
import { useRulesContext } from '../store/rules-context';
import { useGameContext } from '../store/game-context';

const WholeSetup = (props) => {
  const rulesCtx = useRulesContext();
  const gameCtx = useGameContext();

  const showFinal = gameCtx.gameState.yourPick;

  return (
    <>
      <Scoreboard />
      {!showFinal && <MainSection />}
      {showFinal && <MainSectionFinal />}
      <RulesButton />
      {rulesCtx.showModal && <Overlay />}
    </>
  );
};

export default WholeSetup;
