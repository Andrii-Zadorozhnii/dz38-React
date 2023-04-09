import './App.css';
import './styles/reset.css';
import './styles/main.css';
import Header from '../src/Header/Header';
import SideMenu from "./SideMenu/SideMenu";
import Section from "./Sections/Section";


function App() {
  return (
    <div className="App" style={{
        background: 'lightgray',
        fontFamily: "sans-serif",
        height: "100vh",
    }}>
      <Header />
        <div className='main-area' style={{display:'flex'}}>
            <SideMenu />
            <Section />
        </div>
    </div>
  );
}

export default App;
