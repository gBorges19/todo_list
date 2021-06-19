import './App.css';
import Home from './pages/Home'
import GlobalStyle from './assets/styles/global';

function App() {
  return (
    <div style = {{height: '100vh'}}>
      <Home></Home>
      <GlobalStyle/>
    </div>
  );
}

export default App;
