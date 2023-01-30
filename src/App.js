import './App.css';
import NavigationRouters from './components/router-folder/NavigationRouters';
import HeaderFile from './components/header/HeaderFile';
import BreadCrumbFile from './components/breadcrumb/BreadCrumbFile';
import { useLocation } from 'react-router-dom';

function App() {
  const path = useLocation().pathname;

  return (
    <div className="App container py-3">
      <HeaderFile/>
      {path !== '/' ? <BreadCrumbFile prop={path}/> : null}
      <NavigationRouters/>
    </div>
  );
}

export default App;
