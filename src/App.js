import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div className="flexBoard">
          <SideNav/>
          <MainContent/>
      </div>
    </div>
  );
}

export default App;
