import './App.css';
import Header from './components/header/header';
import Top from './components/top-section/top-section';
import Skills from './components/skills/skills';
import Connect from './components/connect/connect';
import Project from './components/projects/projects';

function App() {
  return (
    <div >
      <Header/>
      <Top/>
      <Skills/>
      <Project/>
      <Connect/>
    </div>
  );
}

export default App;
