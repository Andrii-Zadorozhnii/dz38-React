import './App.css';
import './styles/reset.css';
import './styles/main.css';
import Header from '../src/Header/Header';
import SideMenu from "./SideMenu/SideMenu";
import Sections from "./Sections/Sections";
import SubSectionOne from './Sections/subsection-one/SubsectionOne';


function App() {
  return (
    <div className="App" style={{
        background: 'verylightgray',
        fontFamily: "sans-serif",
        height: "100vh",
    }}>
      <Header />
        <div className='main-area' style={{display:'flex'}}>
            <SideMenu />
            <Sections />
        </div>
        <div className='subSections' style={{display:'flex', marginLeft:'220px', position: 'relative', bottom:'165px'}}>
              <SubSectionOne />
        </div>
    </div>
  );
}

export default App;
