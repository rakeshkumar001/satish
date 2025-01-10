import { BrowserRouter } from 'react-router-dom'
import RootRoutes from './routes/Routes';
import ThemeToggler from './components/ThemeToggler';
import MainBody from './layouts/MainBody';

function App() {
  return (
    <div className="App mx-auto overflow-hidden">
      <div className='app  dark:bg-slate-900 h-screen w-full transition-colors duration-500 ease-in-out'>
        <ThemeToggler />
        <section className="w-screen h-screen">
          <BrowserRouter>
            <MainBody>
              <RootRoutes />
            </MainBody>
          </BrowserRouter>
        </section>
      </div>
    </div>
  );
}

export default App;
