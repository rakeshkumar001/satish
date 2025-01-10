import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import RouterData from './Routes/RouteData';

function App() {
  return (
    <main className='bg-slate-300/20'>
      <BrowserRouter>
        <Navbar />
        <RouterData />
      </BrowserRouter>
    </main>
  );
}
export default App;
