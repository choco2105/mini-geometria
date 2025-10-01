/* ========================================
   COMPONENTE PRINCIPAL APP
   Maneja el flujo entre pantallas
   ======================================== */

import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import { SCREENS } from './utils/constants';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.START);

  const handleStartGame = () => {
    setCurrentScreen(SCREENS.GAME);
  };

  const handleBackToMenu = () => {
    setCurrentScreen(SCREENS.START);
  };

  return (
    <div className="app">
      {currentScreen === SCREENS.START && (
        <StartScreen onStart={handleStartGame} />
      )}
      
      {currentScreen === SCREENS.GAME && (
        <GameScreen onBackToMenu={handleBackToMenu} />
      )}
    </div>
  );
}

export default App;