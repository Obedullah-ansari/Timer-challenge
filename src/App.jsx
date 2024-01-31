import Player from './components/Player.jsx';
import Timerchallenges from './components/Timerchallenges.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timerchallenges title="Easy" targetTime={1}  />
        <Timerchallenges title="Intermediate" targetTime={5}  />
        <Timerchallenges title="Experts" targetTime={10}  />
        <Timerchallenges title="Legends" targetTime={15}  />
      </div>
    </>
  );
}

export default App;
