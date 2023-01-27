import './App.css';
import NavigationRouters from './components/router-folder/NavigationRouters';
import HeaderFile from './components/header/HeaderFile';

function App() {
  return (
    <div className="App container py-3">
      <HeaderFile/>
      <NavigationRouters/>
    </div>
  );
}

export default App;
