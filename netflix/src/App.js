
import { Body } from './components/Body';
import  { Toaster } from 'react-hot-toast';
import MovieDialogue from './components/movieDialogue';


function App() {
  return (
    <div className="App">
      <Body/>
      <Toaster/>
      <MovieDialogue/>
     
      
    </div>
  );
}

export default App;
