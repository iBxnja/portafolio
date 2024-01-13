
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import './index.css';

function App() {
  return (
    <>
    <div class="w-full h-full bg-gradient-to-b from-indigo-950 to-neutral-950 bg-fixed">
      <Header/>
      <Main />
    </div>
    </>
  );
}

export default App;
