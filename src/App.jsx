import Background from './assets/components/background';
import Navbar from './assets/components/navbar'
import Skills from './assets/components/skills';
import Projects from './assets/components/projects';
import Contact from './assets/components/contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
