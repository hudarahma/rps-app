import ScoreBoard from './component/ScoreBoard';
import './App.css';
import Hands from './component/Hands';
import Contest from './component/Contest'
import { useSelector } from 'react-redux';
function App() {

  const userHand = useSelector(state => state.game.userHand);
  return (
    <div className="app">
      <ScoreBoard />
     { userHand ?  <Contest /> : <Hands /> }
     
    </div>
  );
}

export default App;
