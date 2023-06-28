import Scoreboard from './Scoreboard';
import MainSection from './Main/MainSection';
import Overlay from './Overlay';
import MainSectionFinal from './Main/MainSectionFinal';
import { useRulesContext } from '../store/rules-context';
import { useGameContext } from '../store/game-context';
import SwitchContainer from './SwitchContainer';

const WholeSetup = (props) => {
  const rulesCtx = useRulesContext();
  const gameCtx = useGameContext();

  const showFinal = gameCtx.gameState.yourPick;

  return (
    <>
      <Scoreboard />
      {!showFinal && <MainSection />}
      {showFinal && <MainSectionFinal />}
      <SwitchContainer />
      {rulesCtx.showModal && <Overlay />}
    </>
  );
};

export default WholeSetup;
