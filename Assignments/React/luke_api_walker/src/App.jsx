import './vapor.css';
import SearchBar from './components/SearchBar';
import { Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';
import CharacterSingle from './components/CharacterSingle';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import WalkersAPI from './components/WalkersAPI';

function App() {
  return (
    <>
      <SearchBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<WalkersAPI />}>
            <Route path="planets" element={<Planets />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="starships" element={<Starships />} />
            <Route path="characters/" element={<Characters />}>
              <Route path=":id" element={<CharacterSingle />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
