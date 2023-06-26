import '../styles/globals.css';
import { RulesContextProvider } from '../store/rules-context';
import { GameContextProvider } from '../store/game-context';

export default function App({ Component, pageProps }) {
  return (
    <GameContextProvider>
      <RulesContextProvider>
        <Component {...pageProps} />
      </RulesContextProvider>
    </GameContextProvider>
  );
}
